import { Link } from 'react-router-dom';
import imgHome from '/src/assets/img-home.svg';
import imgApply from '/src/assets/img-apply.svg';

const Home = () => {
  return (
    <main className='home-container'>
      <div className='home-main'>
        <img src={imgHome} className='home-img' alt="home-svg" />
        <div className='home-presentation'>
          <h2 className='welcome-title'>¡Bienvenido(a)!</h2>
          <h2 className='welcome-text'>En nuestro rincón del placer y el aroma, te invitamos a explorar el maravilloso mundo de los cafés selectos. Sumérgete en una experiencia sensorial única mientras descubres una amplia variedad de sabores y aromas que te transportarán a lugares lejanos.</h2>
        </div>
      </div>
      <div className='home-apply'>
        <div className='apply-left'>
          <h2>unete a nostros</h2>
          <p className='apply-left-paragraph'>Puedes revisar las ofertas que tenemos para vos, es simple, registrate!</p>
          <Link to={'/suscribeCoffe+'}><button className='apply-left-btn'>registrarme</button></Link>
        </div>
        <div className='apply-right'>
          <img src={imgApply} alt="" />
        </div>
      </div>
    </main>
  )
}

export default Home;
