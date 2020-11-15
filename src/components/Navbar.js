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
          Filemanager
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Edit/BatchEdit"
        >
          Estimate
        </NavLink>
      </li>
      {props.isUserProjvad && <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Assign/Assign"
        >
          Assign
        </NavLink>
</li>}

      <li className="nav-item">
        <a
          className="nav-link"
          href="https://modulsprojects.web.app/"
        >
          Gantt
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
          Eksports
        </NavLink>
      </li>
 
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Reports/Doughnut"
        >
          Reports
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/Total/TotalApp"
        >
          Total
        </NavLink>
      </li>
    </ul>
  </nav>
)