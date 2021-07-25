
import React from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { Navbar, Nav, Container } from 'react-bootstrap'


const Navbar = () => {

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <span><Link to="logo">📀</Link></span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link target="_blank" to="/About Me">About Me</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link target="_blank" to="/Homes">Homes</Link>
          </div>
          <div className="navbar-item">
            
          </div>
          <div className="navbar-item">
            <Link target="_blank" to="/Movies">Movies</Link>
          </div>
          <div className="navbar-item">
            <Link target="_blank" to="/Submit">Submit</Link>
          </div>
          <div className="navbar-item">
            <Link target="_blank" to="/Register">Register</Link>
          </div>
          <div className="navbar-item">
            <Link target="_blank" to="Login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  )

}


export default Navbar
