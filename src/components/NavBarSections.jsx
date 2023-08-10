import React from 'react'
import { Link } from 'react-router-dom'

const NavBarSections = ( {titleSection, products} ) => {
  return (
   
    <div className="nav-bar-sections">
        <h2 key={products.id} className="title-list">{titleSection}</h2>
        <ul className="items-sections-container">
            <li className="item-section"><Link to={'/products'}>todos</Link></li>
            <li className="item-section"><Link to={'/products/bebidas'}>bebidas</Link></li>
            <li className="item-section"><Link to={'/products/comida'}>comida</Link></li> 
            <li className="item-section"><Link to={'/products/snacks'}>snacks</Link></li>
        </ul>
    </div>
  
  )
}

export default NavBarSections
