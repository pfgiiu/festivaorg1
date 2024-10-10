import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>FestivaOrg</h1>
      <nav>
        <Link to="/">Nosso Sistema</Link>
        <Link to="/valores">Valores</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
