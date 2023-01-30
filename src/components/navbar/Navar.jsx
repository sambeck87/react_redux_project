import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import '../../styles/navbar.scss';
import navLink from '../../commons/data';
import { logo } from '../../images/files';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav className="nav-container">
      <div className="nav-items-container container">
        <div className="logo-container">
          <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
            <img src={logo} alt="logo" />
          </Link>
          <span>Space Travelers&apos; Hub</span>
        </div>
        <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
          {navLink.map((element) => (
            <li key={element.id}>
              <NavLink to={element.link} className={({ isActive }) => (isActive ? 'active-nav' : '')} onClick={() => setIsNavShowing((prev) => !prev)}>{ element.name }</NavLink>
            </li>
          ))}
        </ul>
        <button type="button" className="nav-toggle-btn" onClick={() => setIsNavShowing((prev) => !prev)}>
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
