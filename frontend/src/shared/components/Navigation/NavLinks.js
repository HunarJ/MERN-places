import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

import './NavLinks.css';

export const NavLinks = () => {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to="/" exact>All users</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places">My places</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">add place</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Authenticate</NavLink>
        </li>
    </ul>
  )
}
