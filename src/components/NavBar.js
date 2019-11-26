import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar" >
      {/* Home */}
      <NavLink 
        to="/"
        exact
        activeStyle={{
          background: 'yellow'
        }}
      >
        Home
      </NavLink>

      <NavLink
        to='/movies'
        exact
        activeStyle={{
          background: 'yellow'
        }}
      >
        Movies
      </NavLink>

      <NavLink
        to='/directors'
        exact
        activeStyle={{
          background: 'yellow'
        }}
      >
        Directors
      </NavLink>
      
      <NavLink
        to='/actors'
        exact
        activeStyle={{
          background: 'yellow'
        }}
      >
        Actors
      </NavLink>

    </div>
  );
};

export default NavBar;
