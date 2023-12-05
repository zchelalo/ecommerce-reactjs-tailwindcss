import { FaRegSadTear } from 'react-icons/fa'

function SinProductos() {
  return (
    <div className='flex flex-col items-center justify-center col-span-4 p-4 mt-2 text-center'>
      <FaRegSadTear className='w-44 h-44 text-red-500' />
      <span className='mt-6 text-3xl'>No se encontraron productos</span>
    </div>
  )
}

export { SinProductos }