import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../firebase/config";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkut = () => {

    const [orderId, setOrderId] = useState("");

    const { cart, priceTotal, emptyCart } = useContext(CartContext);

    const {register, handleSubmit} = useForm();

    const buy = (data) => {
        const order = {
            client: data,
            products: cart,
            total: priceTotal()
        };
    
        console.log(order);
    
        const usersRef = collection(dataBase, "orders");
    
        addDoc(usersRef, order)
          .then((doc => {
            setOrderId(doc.id);
            emptyCart();
          }));

      };

      if (orderId) {
        return (
          <div className="order-completed">
            <h2>muchas gracias por tu compra.</h2>
            <p>tu numero de pedido es: <span className="span-order-id">{orderId}</span></p>
          </div>
        )
      };

    return (
        <section className='form-section-container'>
          <div className="form-wrapper">
            <h2 className="form-title">finalice su compra.</h2>
            <form className="form" onSubmit={handleSubmit(buy)} >
              <label htmlFor="">ingrese su nombre</label>
              <input type="text" placeholder='ingrese su nombre' {...register("name")}/>
              <label htmlFor="">ingrese su apellido</label>
              <input type="text" placeholder='ingrese su apellido' {...register("surname")}/>
              <label htmlFor="">ingrese su email</label>
              <input type="email" placeholder='ingrese su email' {...register("email")}/>
              <label htmlFor="">ingrese su telefono</label>
              <input type="number" placeholder='ingrese su telefono' {...register("phone")}/>
              <label htmlFor="">ingrese su tarjeta de credito</label>
              <select {...register("tarjet")}>
                <option>visa</option>
                <option>mastercard</option>
                <option>bbva</option>
              </select>
              <label htmlFor="">ingrese el numero de su tarjeta</label>
              <input type="number" placeholder='ingrese el numero de tarjeta' {...register("tarjet-number")}/>
              <input type="submit" value="enviar" />
            </form>
          </div>
      </section>
    )
};

export default Checkut;
