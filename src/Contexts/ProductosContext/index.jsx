/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'

const ProductosContext = createContext()

function ProductosProvider({ children }) {
  const [count, setCount] = useState(0)
  const [isOpenDetalleProducto, setIsOpenDetalleProducto] = useState(false)
  const [isOpenCheckout, setIsOpenCheckout] = useState(false)
  const [mostrarProducto, setMostrarProducto] = useState({})
  const [productosCarrito, setProductosCarrito] = useState([])
  const [orden, setOrden] = useState([])
  const [items, setItems] = useState([])

  const [valorBusqueda, setValorBusqueda] = useState('')
  const [busquedaPorCategoria, setBusquedaPorCategoria] = useState('')
  const [itemsPorBusqueda, setItemsPorBusqueda] = useState([])

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()
        const dataCategorias = data.map((categoria) => {
          let detalleCategoria = {
            to: `/categoria/${categoria.replace(/ /g, "-").replace(/'/g, "").replace(/"/g, "").replace(/,/g, "-")}`,
            text: `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`,
            className: ''
          }

          return detalleCategoria
        })

        setCategorias(categorias.concat(dataCategorias))
      } catch (error) {
        console.error(`Se recibio el siguiente error: ${error}`)
      }
    }

    getCategorias()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`Se recibio el siguiente error: ${error}`)
      }
    }

    getProducts()
  }, [])

  const filtrarItemsPorBusqueda = (items, valorBusqueda) => {
    return valorBusqueda !== '' ? items?.filter(item => item.title.toLocaleLowerCase().includes(valorBusqueda.toLocaleLowerCase())) : []
  }

  const filtrarItemsPorCategoria = (items, busquedaPorCategoria) => {
    return busquedaPorCategoria !== '' ? items?.filter(item => item.category.toLocaleLowerCase() === busquedaPorCategoria.toLocaleLowerCase()) : []
  }

  const filterBy = (items, tipoBusqueda, valorBusqueda, busquedaPorCategoria) => {
    if (tipoBusqueda === 'POR_BUSQUEDA'){
      return filtrarItemsPorBusqueda(items, valorBusqueda)
    }

    if (tipoBusqueda === 'POR_CATEGORIA'){
      return busquedaPorCategoria === 'Home' ? items : filtrarItemsPorCategoria(items, busquedaPorCategoria)
    }

    if (tipoBusqueda === 'POR_BUSQUEDA_CATEGORIA'){
      return busquedaPorCategoria === 'Home' ? 
      filtrarItemsPorBusqueda(items, valorBusqueda) : 
      filtrarItemsPorCategoria(items, busquedaPorCategoria).filter(item => item.title.toLocaleLowerCase().includes(valorBusqueda.toLocaleLowerCase()))
    }

    return items
  }

  useEffect(() => {
    if (valorBusqueda !== '' && busquedaPorCategoria === ''){
      setItemsPorBusqueda(filterBy(items, 'POR_BUSQUEDA', valorBusqueda, busquedaPorCategoria))
    }

    if (busquedaPorCategoria !== '' && valorBusqueda === ''){
      setItemsPorBusqueda(filterBy(items, 'POR_CATEGORIA', valorBusqueda, busquedaPorCategoria))
    }

    if (busquedaPorCategoria !== '' && valorBusqueda !== ''){
      setItemsPorBusqueda(filterBy(items, 'POR_BUSQUEDA_CATEGORIA', valorBusqueda, busquedaPorCategoria))
    }

    if (busquedaPorCategoria === '' && valorBusqueda === ''){
      setItemsPorBusqueda(filterBy(items, null, valorBusqueda, busquedaPorCategoria))
    }
  }, [items, valorBusqueda, busquedaPorCategoria])

  return (
    <ProductosContext.Provider value={{ 
      count,
      setCount,
      isOpenDetalleProducto,
      setIsOpenDetalleProducto,
      mostrarProducto,
      setMostrarProducto,
      productosCarrito,
      setProductosCarrito,
      isOpenCheckout,
      setIsOpenCheckout,
      orden,
      setOrden,
      items,
      setItems,
      valorBusqueda,
      setValorBusqueda,
      itemsPorBusqueda,
      setItemsPorBusqueda,
      filtrarItemsPorBusqueda,
      categorias,
      setCategorias,
      busquedaPorCategoria,
      setBusquedaPorCategoria
    }}>
      {children}
    </ProductosContext.Provider>
  )
}

export { ProductosContext, ProductosProvider }