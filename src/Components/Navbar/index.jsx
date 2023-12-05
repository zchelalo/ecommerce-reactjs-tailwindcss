import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ProductosContext } from '../../Contexts/ProductosContext'
import { FaShoppingCart } from 'react-icons/fa'

function Navbar() {
  const {
    count,
    categorias,
    setBusquedaPorCategoria
  } = useContext(ProductosContext)

  const menuIzquierda = [
    {
      to: '/',
      text: 'Awason',
      className: 'font-semibold text-lg'
    },
    {
      to: '/',
      text: 'Home',
      className: ''
    }
  ]
  
  const menuDerecha = [
    {
      text: 'eduardosaavedra687@gmail.com',
      className: 'text-black/60'
    },
    {
      to: '/mis-ordenes',
      text: 'Mis ordenes',
      className: ''
    },
    {
      to: '/mi-cuenta',
      text: 'Mi cuenta',
      className: ''
    },
    {
      to: '/registro',
      text: 'Registro',
      className: ''
    },
    {
      icon: <FaShoppingCart className='m-2' />,
      text: count,
      className: ''
    },
  ]

  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-1 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        {menuIzquierda.concat(categorias).map((item, index) => (
          <li 
            className={item.className}
            key={item.text}
          >
            {item.to !== undefined ? (
              <NavLink 
                to={item.to}
                className={({ isActive }) => (isActive && index !== 0) ? `${activeStyle} flex flex-between items-center` : 'flex flex-between items-center'}
                onClick={() => item.to !== '/' ? setBusquedaPorCategoria(item.text) : setBusquedaPorCategoria('Home')}
              >
                {item.icon !== undefined ? item.icon : null} 
                {item.text}
              </NavLink>
            ) : (
              <div className={`${item.className} flex flex-between items-center cursor-pointer`}>
                {item.icon !== undefined ? item.icon : null} 
                {item.text}
              </div>
            )}
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-3'>
        {menuDerecha.map((item, index) => (
          <li 
            className={item.className}
            key={item.text}
          >
            {item.to !== undefined ? (
              <NavLink 
                to={item.to}
                className={({ isActive }) => (isActive && index !== 0) ? `${activeStyle} flex flex-between items-center` : 'flex flex-between items-center'}
              >
                {item.icon !== undefined ? item.icon : null} 
                {item.text}
              </NavLink>
            ) : (
              <div className={`${item.className} flex flex-between items-center cursor-pointer`}>
                {item.icon !== undefined ? item.icon : null} 
                {item.text}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { Navbar }