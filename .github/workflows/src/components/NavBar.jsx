import React from "react";
import {Link} from 'react-router-dom';
import './index.css'
import Catagory from "./Catagory";

function NavBar() {
  return (
    <>
    <nav>
      <ul className="navbar-list">
        <li>
          <Link to={Home}>Home</Link>
        </li>
        <li>
          <Link to={Catagory}>Catagory</Link>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default NavBar;