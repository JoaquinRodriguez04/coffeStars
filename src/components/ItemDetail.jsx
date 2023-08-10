import { useContext, useEffect, useState } from "react";
import ItemAddCart from "./ItemAddCart";
import { CartContext } from "../context/CartContext";


const ItemDetail = ( {item} ) => {

  const {addToCart} = useContext(CartContext);

  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(item.price);

  useEffect(() => {
      const updatedPrice = item.price * amount;
      setPrice(updatedPrice);
  }, [amount,price]);

  const HandleSubtract = () => {
      amount > 1 && setAmount(amount - 1);
  };

  const HandleAdd = () => {
      amount < item.stock && setAmount(amount + 1);
  }; 

  return (
    <div className="item-detail-container">
      <div className="item-detail-header">
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
      </div>
      <div className="item-detail-description">
        <p className="item-detail-category">{item.category}</p>
        <p className="item-detail-paragraph">{item.description}</p>
      </div>
      <ItemAddCart amount={amount} price={price} HandleSubtract={HandleSubtract} HandleAdd={HandleAdd} HandleAddToCart={() => {addToCart(item,amount,price)}} />
    </div>
  )
}

export default ItemDetail;
