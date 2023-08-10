// import SideCart from "./sideCart";

const ItemAddCart = ( {amount, price, HandleSubtract, HandleAdd, HandleAddToCart} ) => {

  return (
    <div className="item-add-cart-container">
        <div className="item-add-cart">
            <h2 className="item-detail-price"><span className="simbol-price">$</span>{price}</h2>
            <button className="btn-add-cart" onClick={HandleAddToCart}>agregar al carrito</button>
        </div>
        <div className="item-add-count">
            <button className="btn-reload-count" onClick={HandleSubtract}><p className="sign-reload-count">-</p></button>
            <h2 className="item-count-cart">{amount}</h2>
            <button className="btn-reload-count" onClick={HandleAdd} ><p className="sign-reload-count">+</p></button>
        </div>
    </div>
  )
};

export default ItemAddCart;
