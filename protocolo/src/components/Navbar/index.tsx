import React, { useState } from 'react';
import './index.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={`navigation ${menuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          <img src='https://br.jimilab.com/wp-content/uploads/2022/09/logo.png'  />
          <button className="buttonMenu" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className={`navigation-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="/leitorUnitario">Leitor Unitário</a>
          </li>
          <li>
            <a href="/leitorLote">Leitor em Lote</a>
          </li>
        </ul>
      </div>
    </div>
  );
}