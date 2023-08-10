import { Link } from 'react-router-dom';
import logoNav from '../../src/assets/logo-nav.png';
import CartWidget from './CartWidget';

const NavBar = () => {    

  return (
    <nav className='navbar-container'>
        <Link to="/"><img src={logoNav} className='logo-nav' alt="logo" /></Link>
        <ul className='nav-items'>
            <li><Link to="/">inicio</Link></li>
            <li><Link to="/products">menu stars</Link></li>
            <li><Link to="/suscribeCoffe+">suscribirse +</Link></li>    
            <li><CartWidget/></li>
        </ul>
    </nav>
  
  )
};

export default NavBar;
