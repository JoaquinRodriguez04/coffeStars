import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const ItemCart = ( {cart} ) => {
    
    const {deleteProduct} = useContext(CartContext);
    
    return (
      <>
       {cart.map((prod) => (
            <div key={prod.id} className="cart-product">
                <div className="cart-content">
                    <img src={prod.image} alt={prod.title} />
                    <p className="cart-price"><span className="simbol-price">$</span>{prod.price}</p>
                </div>
                <div className="cart-info">
                    <h2>{prod.title}</h2>
                    <p className="cart-amount-balloon">{prod.amount}</p>
                </div>
            </div>
        ))}
      </>
    )
};

export default ItemCart;
