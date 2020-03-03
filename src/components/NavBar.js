import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/mall"
        exact
        >Back to Mall</NavLink>

        <NavLink
        to="/"
        exact
        >Log Out</NavLink>

        <NavLink
        to="/cart"
        exact
        >Cart</NavLink>
      {/*{code here}*/}
    </div>
  );
};

export default NavBar;