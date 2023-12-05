import { useState, useEffect } from 'react'
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { DetalleProducto } from '../../Components/DetalleProducto'
import { Checkout } from '../../Components/Checkout'

function Home() {
  const [items, setItems] = useState([])

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

  return (
    <Layout>
      <main className='grid grid-cols-4 w-full max-w-screen-lg gap-4'>
        {items.length > 0 ? items.map(item => (
          <Card 
            key={item.id}
            id={item.id}
            category={item.category}
            image={item.image}
            price={item.price}
            title={item.title}
            description={item.description}
          />
        ))
        :
          'No hay productos'
        }
      </main>
      <DetalleProducto />
      <Checkout />
    </Layout>
  )
}

export { Home }