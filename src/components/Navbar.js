import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
    
    </div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/"
          exact
        >
          Tāme
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Upload"
        >
          Imports
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Edit"
        >
          Rediģēt
        </NavLink>
      </li>
    </ul>
  </nav>
)
