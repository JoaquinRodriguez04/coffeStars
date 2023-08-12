import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../firebase/config";

const Suscribe = () => {

  const {register, handleSubmit} = useForm();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');


  const send = (data) => {
    const user = {
      user: data
    };

    console.log(user);

    const usersRef = collection(dataBase, "users");

    addDoc(usersRef, user);

    setName('');
    setSurname('');
    setEmail('');
  };

  const cleanName = (e) => {
    setName(e.target.value);
  }

  const cleanSurname= (e) => {
    setSurname(e.target.value);
  }
  
  const clearEmail = (e) => {
    setEmail(e.target.value);
  }

  return (
    <section className='form-section-container'>
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit(send)} >
          <label className="form-title">suscribete a nosotros<span className="form-title-disabled">, para obtener descuentos exclusivos y enterarte de todas las novedades!</span></label>
          <label>ingrese su nombre</label>
          <input type="text" placeholder='ingrese su nombre' {...register("name")} value={name} onChange={cleanName} />
          <label>ingrese su apellido</label>
          <input type="text" placeholder='ingrese su apellido' {...register("surname")} value={surname} onChange={cleanSurname} />
          <label>ingrese su email</label>
          <input type="email" placeholder='ingrese su email' {...register("email")} value={email} onChange={clearEmail} />
          <input type="submit" value="enviar" />
          <Link to='/' className="link-volver">volver</Link>
        </form>
      </div>
    </section>
  )
};

export default Suscribe;
