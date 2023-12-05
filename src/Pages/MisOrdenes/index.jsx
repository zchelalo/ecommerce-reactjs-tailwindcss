import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductosContext } from '../../Contexts/ProductosContext'
import { Layout } from '../../Components/Layout'
import { OrdenesCard } from '../../Components/OrdenesCard'

function MisOrdenes() {
  const {
    orden
  } = useContext(ProductosContext)

  return (
    <Layout>
      <div className='relative flex items-center justify-center w-80 mb-6'>
        <h1 className='font-medium text-xl'>Mis ordenes</h1>
      </div>
      {orden.map(orden => (
        <Link key={orden.id} to={`/mis-ordenes/${orden.id}`}>
          <OrdenesCard 
            fecha={orden.fecha}
            precioTotal={orden.precioTotal}
            totalProductos={orden.totalProductos}
          />
        </Link>
      ))}
    </Layout>
  )
}

export { MisOrdenes }