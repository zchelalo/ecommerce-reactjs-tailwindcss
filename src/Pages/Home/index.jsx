import { useContext } from 'react'
import { ProductosContext } from '../../Contexts/ProductosContext'
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { DetalleProducto } from '../../Components/DetalleProducto'
import { Checkout } from '../../Components/Checkout'

function Home() {
  const {
    items,
    valorBusqueda,
    setValorBusqueda, 
    itemsPorBusqueda,
    busquedaPorCategoria
  } = useContext(ProductosContext)

  const cambiarValorBusqueda = (e) => {
    if (e.target.value === ' ' && valorBusqueda === ''){
      e.target.value = ''
      return
    }

    setValorBusqueda(e.target.value)
  }

  const itemsToRender = () => {
    return (valorBusqueda === '' && busquedaPorCategoria === '' && items.length > 0)
      ? items : 
    ( ((valorBusqueda !== '' && itemsPorBusqueda.length > 0) 
    || (busquedaPorCategoria !== '' && itemsPorBusqueda.length > 0)) 
      ? itemsPorBusqueda : 
    [] )
  }

  return (
    <Layout>
      <header className='relative flex flex-col items-center justify-center w-80 mb-6'>
        <h1 className='font-medium text-xl mb-4'>Lista de productos</h1>
        <input 
          type='search' 
          placeholder='Busca un producto' 
          className='rounded-lg border border-gray-700 w-80 p-4 focus:outline-none'
          onChange={(e) => cambiarValorBusqueda(e)}
        />
      </header>
      <main className='grid grid-cols-4 w-full max-w-screen-lg gap-4'>
        {itemsToRender().length > 0 ? itemsToRender().map(item => (
          <Card 
            key={item.id}
            id={item.id}
            category={item.category}
            image={item.image}
            price={item.price}
            title={item.title}
            description={item.description}
          />
        )) : 'No se encontraron productos D:' }
      </main>
      <DetalleProducto />
      <Checkout />
    </Layout>
  )
}

export { Home }