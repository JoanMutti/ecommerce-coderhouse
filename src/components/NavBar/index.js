import React from "react";
import './styles.css'
import CartWidget from '../CartWidget/'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const categories = [
    {id: 'UkyZYfNqAy', address: '/', text: 'Home'},
    {id: 'n1I9pmaFPc', address: '/products', text: 'Productos'},
    {id: 'QnX1y1NOiQ', address: '/contact', text: 'Contacto'},
  ]


  return (
    <header className='header' >
      <Link to='/' className='brand-place'> 
        <h1 className='brand'>VM</h1>
        <p className='sub-brand'>Indumentaria</p>
      </Link>
      <nav className='nav'>
        {categories.map(category => {
          return (
            <NavLink to={category.address} key={category.id} exact activeClassName='active' className='text-link'>
              <p>{category.text}</p>
            </NavLink>
          )
        })}
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
