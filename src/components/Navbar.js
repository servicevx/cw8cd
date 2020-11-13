import React from 'react'
import {NavLink} from 'react-router-dom'


export const Navbar = props => (
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
          Projekti
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Edit/BatchEdit"
        >
          Tāme
        </NavLink>
      </li>
      {props.isUserProjvad && <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Assign/Assign"
        >
          Pieškirt
        </NavLink>
</li>}

      <li className="nav-item">
        <a
          className="nav-link"
          href="https://google.com"
        >
          Laika grafiks
        </a>
      </li>
   
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Komponentes/Kanban"
        >
          Materiāli
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Export/toExcel"
        >
          Eksportēt uz Excel
        </NavLink>
      </li>
 
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Reports/Doughnut"
        >
          Diagrammas
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Total/TotalApp"
        >
          Kopsavilkums
        </NavLink>
      </li>
    </ul>
  </nav>
)
