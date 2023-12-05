import { useContext } from 'react'
import { ProductosContext } from '../../Contexts/ProductosContext'
import { HiMiniXMark } from 'react-icons/hi2'
import './DetalleProducto.css'

function DetalleProducto() {
  const {
    isOpenDetalleProducto,
    setIsOpenDetalleProducto,
    mostrarProducto
  } = useContext(ProductosContext)

  return (
    <aside
      className={`${isOpenDetalleProducto ? 'flex' : 'hidden'} flex-col fixed right-0 border-l border-t border-black/50 rounded-tl-lg bg-white max-w-[360px] w-full h-[calc(100vh-80px)]`}
    >
      <header className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detalle</h2>
        <HiMiniXMark 
          className='text-xl cursor-pointer' 
          onClick={() => setIsOpenDetalleProducto(false)}
        />
      </header>
      <main className='overflow-y-scroll DetalleProducto-main'>
        <figure className='px-6'>
          <img 
            className='w-full h-full rounded-lg' 
            src={mostrarProducto.image} 
            alt={mostrarProducto.title} 
          />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl mb-2'>${mostrarProducto.price}</span>
          <span className='font-medium text-md'>{mostrarProducto.title}</span>
          <span className='font-light text-sm'>{mostrarProducto.description}</span>
        </p>
      </main>
    </aside>
  )
}

export { DetalleProducto }