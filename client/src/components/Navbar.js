
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
          {/* <div className="navbar-item has-dropdown is-transparent">
            <a className="navbar-link">
              <Link tartget="_blank" to="Browse My movies">Browse My Movies</Link>
            </a> */}
          <select id="search movies" onChange="location =this.options[this.selectedIndex.value;">
            <option>Browse My Movies</option>
            <option value="https://www.youtube.com/watch?v=loPCgi1S3ac"></option>
            <option value="https://youtu.be/aK-X2d0lJ_s"></option>
          </select>
          {/* <div className="navbar-dropdown">
              <a className="navbar-item">
                Browse My Movies
              </a>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </nav>
  )

}


export default Navbar
