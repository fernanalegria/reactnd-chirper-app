import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navigation bar to switch beetween the main page and the new tweet page
 */
const Nav = () => (
  <nav className="nav">
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/new" activeClassName="active">
          New Tweet
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
