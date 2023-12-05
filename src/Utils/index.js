export const precioTotal = (productos) => {
  return productos.reduce((sum, producto) => sum + producto.price, 0)
}

export const dateTime = () => {
  let today = new Date()
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  let dateTime = date+' '+time
      
  return dateTime
}