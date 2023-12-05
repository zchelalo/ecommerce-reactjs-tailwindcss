import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductosContext } from '../../Contexts/ProductosContext'
import { OrdenCard } from '../OrdenCard'
import { precioTotal, dateTime } from '../../Utils'
import { HiMiniXMark } from 'react-icons/hi2'
import './Checkout.css'

function Checkout() {
  const {
    isOpenCheckout,
    setIsOpenCheckout,
    productosCarrito,
    orden,
    setOrden,
    setProductosCarrito,
    setValorBusqueda
  } = useContext(ProductosContext)

  const handleCheckout = () => {
    const ordenParaAgregar = {
      id: crypto.randomUUID(),
      fecha: dateTime(),
      productos: productosCarrito,
      totalProductos: productosCarrito.length,
      precioTotal: precioTotal(productosCarrito)
    }

    setOrden([...orden, ordenParaAgregar])
    setProductosCarrito([])
    setValorBusqueda('')
    setIsOpenCheckout(false)
  }

  return (
    <aside
      className={`${isOpenCheckout ? 'flex' : 'hidden'} flex-col fixed right-0 border-l border-t border-black/50 rounded-tl-lg bg-white max-w-[360px] w-full h-[calc(100vh-80px)]`}
    >
      <header className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Mi orden</h2>
        <HiMiniXMark 
          className='text-xl cursor-pointer' 
          onClick={() => setIsOpenCheckout(false)}
        />
      </header>
      <main className='px-6 flex-1 overflow-y-scroll Checkout-main'>
        {productosCarrito.map((producto) => (
          <OrdenCard 
            key={producto.id}
            id={producto.id}
            title={producto.title}
            image={producto.image}
            price={producto.price}
          />
        ))}
      </main>
      <footer className='px-6'>
        <p className='flex justify-between items-center mt-3'>
          <span className='font-light'>Total:</span>
          <span className='font-medium'>${precioTotal(productosCarrito)}</span>
        </p>
        <Link to='/mis-ordenes/last'>
          <button 
            type='button'
            className='w-full bg-black py-3 text-white mt-3 mb-6 rounded-lg'
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </Link>
      </footer>
    </aside>
  )
}

export { Checkout }