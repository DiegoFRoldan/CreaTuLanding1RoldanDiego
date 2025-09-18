import React from 'react';
import CartWidget from './CartWidget';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>ArteEnPizza</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#menu">Menú</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
