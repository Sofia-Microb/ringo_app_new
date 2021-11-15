import "./ItemCount.scss"
import React, { useEffect, useState } from "react";

export const ItemCount = ({ inicial, stock, ID, onAdd, texto, onCart=false }) => {
  const [counter, setCounter] = useState(inicial);
  const [color, setColor] =useState(false)

  
  const increase = (e) => {
    e.preventDefault();
    if (counter < stock) {
      setCounter(counter + 1)
      
    } else {
      alert('No hay más stock')
    }
  }
  
  const decrease = (e) => {
    e.preventDefault();
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    onAdd(counter)
    setColor(true)
  };

  // Esto es para la pagina del Cart, para que se actualice automaticamente los totales
  useEffect(() => {
    if (onCart) {
        onAdd(counter) }
  }, [counter, onAdd, onCart])

  return (
    <div className="col-10 col-sm-9 col-lg-8 row justify-content-center align-content-center justify-self-center mx-0">
      <button className='mx-1 my-0 fs-4 col-3 text-center' id='accionAgregar' onClick={decrease}>-</button>
      <p className="badge rounded-pill mx-1 col-2 text-center" id="lblCartCount">{counter}</p>
      <button className='mx-1 my-0 fs-4 col-3 text-center' id='accionRestar' onClick={increase} >+</button>
      {!onCart && <button className={ ` ${color === false ? 'btn-Carrito' : 'btn-CarritoDos'} 'col-9 col-sm-8 justify-self-center mt-1' ` } id={ID} onClick={handleClick}>
                    {texto}
          </button>}
    </div>
  )
}

