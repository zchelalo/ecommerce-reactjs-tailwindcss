/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

const ProductosContext = createContext()

function ProductosProvider({ children }) {
  const [count, setCount] = useState(0)
  const [isOpenDetalleProducto, setIsOpenDetalleProducto] = useState(false)
  const [isOpenCheckout, setIsOpenCheckout] = useState(false)
  const [mostrarProducto, setMostrarProducto] = useState({})
  const [productosCarrito, setProductosCarrito] = useState([])
  const [orden, setOrden] = useState([])

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
      setOrden
    }}>
      {children}
    </ProductosContext.Provider>
  )
}

export { ProductosContext, ProductosProvider }