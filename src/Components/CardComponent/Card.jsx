import React, { useState } from 'react'

function Card(props) {

  const [descuento, setDescuento] = useState(props.price)
  const [isHover, setIsHover] = useState(false)

  const aplicarDescuento = () => {
    if (props.price > 100) {
      const porcentajeDescuento = 10;
      const cantidadDescuento = (props.price * porcentajeDescuento) / 100;
      const nuevoPrecio = props.price - cantidadDescuento;
      setDescuento(nuevoPrecio)
    }
  }

  return (
    <>
      {/* <div className='p-5 bg-gray-400 border relative w-40 flex justify-between flex-col'> */}
      <div
        className={`p-5 bg-gray-400 border relative w-52 flex justify-between flex-col rounded ${isHover ? 'hover:bg-red-300' : ''}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div>
          <h2 className='font-bold text-lg'>{props.title}</h2>
        </div>

        <div className='w-full'>
          <img src={props.image} alt="" className='w-full rounded h-48' />
        </div>

        <div className='mt-2'>
          <button onClick={aplicarDescuento} className='bg-red-200'>Apply Discount? Click here</button>
          <p className='absolute bottom-0 mt-2'>Price: {descuento}</p>
        </div>

      </div>
    </>
  )
}

export default Card
