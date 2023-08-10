import React from 'react'

const CartEmpty = () => {
  return (
    <div className='cart-empty'>
        <p> el carrito de compras esta vacio <i className="bi bi-emoji-frown-fill frown"></i></p> 
        <p>revise el menu para comprar.</p>
    </div>
  )
}

export default CartEmpty
