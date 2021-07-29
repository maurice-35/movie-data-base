import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <span><Link to="logo">📀</Link></span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/About Me">About Me</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/Home">Home</Link>
          </div>
          <div className="navbar-item">

          </div>
          <div className="navbar-item">
            <Link to="/Movies">Movies</Link>
          </div>
          <div className="navbar-item">
            <Link to="/Submit">Submit</Link>
          </div>
          <div className="navbar-item">
            <Link to="/Register">Register</Link>
          </div>
          <div className="navbar-item">
            <Link to="Login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  )

}


export default Navbar
