/* eslint-disable react/prop-types */
import { FaShoppingBasket } from 'react-icons/fa'
import { IoIosArrowForward  } from 'react-icons/io'

function OrdenesCard({ fecha, precioTotal, totalProductos }) {
  const nuevoFormatoFecha = (fechaOriginal) => {
    // Supongamos que recibes la fecha original como prop
    const fecha = new Date(fechaOriginal)

    // Opciones de idioma para el formato deseado
    const opcionesFecha = { day: '2-digit', month: '2-digit', year: 'numeric' }
    const opcionesHora = { hour: '2-digit', minute: '2-digit' }

    // Formateamos la fecha y la hora
    const fechaFormateada = `${fecha.toLocaleDateString(undefined, opcionesFecha)} ${fecha.toLocaleTimeString(undefined, opcionesHora)}`

    return fechaFormateada
  }

  return (
    <div className='flex justify-between items-center border border-gray-600 p-4 w-80 rounded-lg mb-4'>
      <p className='flex justify-between w-full'>
        <div className='flex flex-col'>
          <span className='font-light'>{nuevoFormatoFecha(fecha)}</span>
          <span className='font-light flex items-center'>
            <FaShoppingBasket className='mr-2' />
            {totalProductos} Artículos
            </span>
        </div>
        <div className='flex items-center'>
          <span className='font-medium text-2xl'>${precioTotal.toFixed(2)}</span>
          <IoIosArrowForward  className='text-black cursor-pointer ml-2' />
        </div>
      </p>
    </div>
  )
}

export { OrdenesCard }