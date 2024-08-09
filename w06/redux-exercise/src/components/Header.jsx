import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav>
        <h1>Header</h1>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  )
}
