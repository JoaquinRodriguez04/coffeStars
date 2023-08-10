import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartActions = ({ HandleEmpty }) => {
    
    const { priceTotal } = useContext(CartContext);

    return (
        <div className="cart-products-actions">
            <p className="cart-products-price-total">precio total: {priceTotal()}</p>
            <button className="cart-btn-delete" onClick={HandleEmpty}> vaciar carrito</button>
            <Link to={'/Chekout'}>finalizar compra</Link>
        </div>
  )
}

export default CartActions
