import { useContext } from "react";
import ItemCart from "./ItemCart";
import { CartContext } from "../context/CartContext";
import CartActions from "./CartActions";
import CartEmpty from "./CartEmpty";

const CartProducts = () => {

  const { emptyCart, cart } = useContext(CartContext);

  const HandleEmpty = () => {
    emptyCart();
  }

  return (
    <section className='cart-products-container'>
      <h2 className="cart-products-title">carrito</h2>
      <ItemCart cart={cart} />
      {
        cart.length > 0 ? <CartActions HandleEmpty={HandleEmpty} /> : <CartEmpty/> 
      }
    </section>
  )
};

export default CartProducts;
