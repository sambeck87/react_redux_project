import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../images/planet.png';

function Navbar() {
  return (
    <div className="flex-row spaceBetween">
      <NavLink className="flex-row" to="/">
        <img id="logo" src={logo} alt="logo" />
        <h1 id="title">Space Travelers&apos; Hub</h1>
      </NavLink>
      <ul id="navLinks">
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="Missions">Missions</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="Dragons">Dragons</NavLink>
        </li>
        <li>
          <div className="divisor" />
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="MyProfile">My Profile</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
