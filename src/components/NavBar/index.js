import React from "react";
import './styles.css'
import CartWidget from '../CartWidget/'

const NavBar = () => {
  return (
    <header className='header' >
      <h1 className='brand'>VM</h1>
      <nav className='nav'>
        <p>Home</p>
        <p>Productos</p>
        <p>Nosotros</p>
        <p>Nosotros</p>
        <p>Contacto</p>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
