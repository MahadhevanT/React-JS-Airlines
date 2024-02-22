import React from 'react'
import {Link} from "react-router-dom";
import "./Nav_bar.css";
import { navitems } from './Navitems';
import  "./Button.css";

function Navbar() {
  return (
    <>
      <nav className='navbar'>
      <p className='navbar-logo'>TravelSky Express</p>
        <ul className='nav-items'>
          {navitems.map((item)=>{
            return(
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
            );
          })}
        </ul>
        <Link to="signup">
          <button className='btn'>Sign up</button>
        </Link>
      </nav>

    </>
  );
}
export default Navbar;