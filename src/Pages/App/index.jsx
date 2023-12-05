import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ProductosProvider } from '../../Contexts/ProductosContext'
import { Home } from '../Home'
import { MiCuenta } from '../MiCuenta'
import { MiOrden } from '../MiOrden'
import { MisOrdenes } from '../MisOrdenes'
import { Registro } from '../Registro'
import { NoEncontrado } from '../NoEncontrado'
import { Navbar } from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/mi-cuenta',
      element: <MiCuenta />
    },
    {
      path: '/mi-orden',
      element: <MiOrden />
    },
    {
      path: '/mis-ordenes',
      element: <MisOrdenes />
    },
    {
      path: '/mis-ordenes/last',
      element: <MiOrden />
    },
    {
      path: '/mis-ordenes/:id',
      element: <MiOrden />
    },
    {
      path: '/registro',
      element: <Registro />
    },
    {
      path: '/*',
      element: <NoEncontrado />
    }
  ])

  return routes
}

function App() {
  return (
    <ProductosProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ProductosProvider>
  )
}

export { App }
