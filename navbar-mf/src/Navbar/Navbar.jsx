import React from 'react';
import './NavBarStyle.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h3>Turn<b>APP</b></h3>
      </div>
      <div className="tittlePrincipal">
        <h1>Serving now</h1>
      </div>
      <div className="userName">
        <p>Esteban</p>
      </div>
    </nav>
  );
}
