import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductosContext } from '../../Contexts/ProductosContext'
import { Layout } from '../../Components/Layout'
import { OrdenCard } from '../../Components/OrdenCard'
import { IoIosArrowBack } from 'react-icons/io'

function MiOrden() {
  const {
    orden
  } = useContext(ProductosContext)

  const { id } = useParams()
  let ordenAMostrar = id === undefined ? orden?.slice(-1)[0] : orden?.filter(orden => orden.id === id)[0] 

  return (
    <Layout>
      <div className='relative flex items-center justify-center w-80 mb-6'>
        <Link to='/mis-ordenes' className='absolute left-0'>
          <IoIosArrowBack className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1 className='font-medium text-xl'>Mis ordenes</h1>
      </div>
      <main className='px-6 flex-1'>
        {ordenAMostrar?.productos.map(producto => (
          <OrdenCard 
            key={producto.id}
            id={producto.id}
            title={producto.title}
            image={producto.image}
            price={producto.price}
            isMiOrden={true}
          />
        ))}
      </main>
    </Layout>
  )
}

export { MiOrden }