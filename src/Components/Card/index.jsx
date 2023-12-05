/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { ProductosContext } from '../../Contexts/ProductosContext'
import { Toaster, toast } from 'sonner'
import { FaPlus } from 'react-icons/fa6'
import { FaCheck } from 'react-icons/fa6'
import './Card.css'

function Card({ id, category, image, price, title, description }) {
  const {
    count,
    setCount,
    setIsOpenDetalleProducto,
    setMostrarProducto, 
    productosCarrito,
    setProductosCarrito,
    setIsOpenCheckout
  } = useContext(ProductosContext)

  const addProductoCarrito = (e) => {
    e.stopPropagation()

    if (productosCarrito.find((producto) => producto.id === id) !== undefined){
      toast.warning('Usted ya ha añadido este producto al carrito')
      return
    }

    setCount(count + 1)
    setIsOpenDetalleProducto(false)
    setIsOpenCheckout(true)

    const producto = { id, category, image, price, title, description }
    setProductosCarrito([...productosCarrito, producto])
  }

  const mostrarProductoDetalle = () => {
    setIsOpenCheckout(false)
    setIsOpenDetalleProducto(true)
    setMostrarProducto({ category, image, price, title, description })
  }

  return (
    <div 
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={mostrarProductoDetalle}
    >
      <Toaster richColors position="bottom-left" expand={true} />
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
        <img 
          src={image} 
          alt={title} 
          className='Card-img w-full h-full object-cover rounded-lg'
        />
        <div 
          className={`${productosCarrito.find((producto) => producto.id === id) ? 'bg-gray-900 text-white' : 'bg-white'} absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1`}
          onClick={addProductoCarrito}
        >
          {productosCarrito.find((producto) => producto.id === id) ? <FaCheck /> : <FaPlus />}
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light mr-2 truncate'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </div>
  )
}

export { Card }