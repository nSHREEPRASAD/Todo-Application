import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-black">
          <Link className="navbar-brand text-white" to={"/"}>Home</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navbar-brand text-white" to={"/addtodo"}>Addtodo</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand text-white" to={"/seetodo"}>Seetodo</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
