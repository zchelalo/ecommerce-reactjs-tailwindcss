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
  const [itemsPorBusqueda, setItemsPorBusqueda] = useState([])

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

  useEffect(() => {
    if (valorBusqueda !== ''){
      setItemsPorBusqueda(filtrarItemsPorBusqueda(items, valorBusqueda))
    }
  }, [items, valorBusqueda])

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
      filtrarItemsPorBusqueda
    }}>
      {children}
    </ProductosContext.Provider>
  )
}

export { ProductosContext, ProductosProvider }