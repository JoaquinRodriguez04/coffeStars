import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState(initialCart);
  
    const addToCart = (item, amount, price) => {
    const ItemAdd = {...item, amount, price};

    const newCart = [...cart];

    const itemFind = newCart.find((prod) => prod.id === ItemAdd.id);

    if(itemFind){
      itemFind.amount += amount;
      itemFind.price += price;
    } else{
      newCart.push(ItemAdd);
    }  
    setCart(newCart);
  
    }; 
  
    const amountInTheCart = () => {
      return cart.reduce((acc, prod) => acc + prod.amount, 0);
    };
  
    const priceTotal = () => {
      return cart.reduce((acc, prod) => acc + prod.amount * prod.price, 0);
    };
  
    const emptyCart = () => {
      setCart([]);
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);
  

    return (
        <CartContext.Provider value={{cart, addToCart, amountInTheCart, priceTotal, emptyCart}} >
            {children}
        </CartContext.Provider>
    );
};