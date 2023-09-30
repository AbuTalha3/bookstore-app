import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navigation-main">
      <h2 className="main-heading">Bookstore CMS</h2>
      <div className="nav-list-div">
        <ul className="nav-list">
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/category">CATEGORIES</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
