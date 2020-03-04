import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/mall"
        exact
        ><button>Back to Mall</button></NavLink>

        <NavLink
        to="/"
        exact
        ><button>Log Out</button></NavLink>

        <NavLink
        to="/cart"
        exact
        ><button>Cart</button></NavLink>
      {/*{code here}*/}
    </div>
  );
};

export default NavBar;