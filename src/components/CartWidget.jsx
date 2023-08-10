import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const CartWidget = () => {

    const {amountInTheCart} = useContext(CartContext);

    return (
      <div className="widget-wrapper">
          <Link to="/CartProducts"><i className="bi bi-cart2"></i></Link>
          <span className="numberCart">{amountInTheCart()}</span>
      </div>
    )
};

export default CartWidget;
