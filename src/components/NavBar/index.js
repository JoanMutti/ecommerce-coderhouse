import React, { useState } from "react";
import './styles.css'
import CartWidget from '../CartWidget/'
import { Link, NavLink } from "react-router-dom";

const NavBar = ({setCartOpen, width}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const categories = [
    {id: 'UkyZYfNqAy', address: '/', text: 'Home'},
    {id: 'n1I9pmaFPc', address: '/products', text: 'Productos'},
    {id: 'QnX1y1NOiQ', address: '/contact', text: 'Contacto'},
  ]
  
  console.log(menuOpen, width)

  return (
    <header className='header' >
      <Link to='/' className='brand-place'> 
        <h1 className='brand'>VM</h1>
        <p className='sub-brand'>Indumentaria</p>
      </Link>
      {width < 480  ? <i onClick={() => setMenuOpen(true)}><img src="/assets/images/menu.svg" alt='Open Menu' className='menu-opener' /></i> : null}
      <nav className={`nav ${width < 480 ? menuOpen ? 'open-menu' : 'close-menu' : ''}`}>
        {width < 480 ? <i onClick={() => setMenuOpen(false)}><img src='/assets/images/close.svg' alt='Close Menu' /></i> : null}
        {categories.map(category => {
          return (
            <NavLink to={category.address} key={category.id} onClick={() => setMenuOpen(false)} exact activeClassName='active' className='text-link'>
              <p>{category.text}</p>
            </NavLink>
          )
        })}
      </nav>
      <CartWidget setCartOpen={setCartOpen} />
    </header>
  );
};

export default NavBar;
