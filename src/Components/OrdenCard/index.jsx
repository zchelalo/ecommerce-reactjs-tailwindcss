import { useContext } from 'react'
import { ProductosContext } from '../../Contexts/ProductosContext'
import { HiMiniXMark } from 'react-icons/hi2'

// eslint-disable-next-line react/prop-types
function OrdenCard({ id, title, image, price, isMiOrden = false }) {
  const {
    productosCarrito,
    setProductosCarrito,
  } = useContext(ProductosContext)

  const quitarProducto = () => {
    let newProductos = [...productosCarrito]
    const indice = productosCarrito.findIndex((producto) => producto.id === id)
    newProductos.splice(indice, 1)
    setProductosCarrito(newProductos)
  }

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='OrdenCard-figure flex items-center gap-2 w-[70%]'>
        <figure className='w-[35%] h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
        </figure>
        <p className='text-sm font-light truncate w-[65%]'>{title}</p>
      </div>
      <div className='OrdenCard-price flex items-center justify-end gap-2 w-[30%]'>
        <p className='text-sm font-medium'>${price}</p>
        {isMiOrden === false ? (
          <HiMiniXMark 
            className='text-xl cursor-pointer'
            onClick={quitarProducto}
          />
        ) : (
          undefined
        )}
      </div>
    </div>
  )
}

export { OrdenCard }