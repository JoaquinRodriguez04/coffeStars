import { Link } from 'react-router-dom';
import logoNav from '../../src/assets/logo-nav.png';
import CartWidget from './CartWidget';
import { useState } from 'react';

const NavBar = () => {    

  const [dropdown, setDropdown] = useState(false);

  const handleShow = () => {
    setDropdown(!dropdown);
  };

  const handledisabled = () => {
    setDropdown(false);
  };

  return (
    <nav className='navbar-container'>
        <Link to="/coffeStars/"><img src={logoNav} className='logo-nav' alt="logo" /></Link>
        <span 
          class={`material-symbols-outlined home-icon-drop ${ dropdown && 'drop-disabled'}`}
          onClick={handleShow}>menu</span>
        <div 
          className={`navbar-dropdown-container ${dropdown &&  'dropdown-active'}`}>
          <div className='dropdown-wrapper'>
            <span 
              class="material-symbols-outlined"
              onClick={handledisabled}>close</span>
            <ul className='nav-items'>
              <li><Link to="/coffeStars/">inicio</Link></li>
              <li><Link to="/products">menu stars</Link></li>
              <li><Link to="/suscribeCoffe+">suscribirse +</Link></li>    
            </ul>
          </div>
        </div>
        <div className='navbar-desktop-container'>
          <ul className='nav-items'>
            <li><Link to="/coffeStars/">inicio</Link></li>
            <li><Link to="/products">menu stars</Link></li>
            <li><Link to="/suscribeCoffe+">suscribirse +</Link></li>    
            <li><CartWidget/></li>
          </ul>
        </div>
    </nav>
  
  )
};

export default NavBar;
