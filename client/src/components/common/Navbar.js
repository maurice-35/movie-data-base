import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { getPayload } from '../../helpers/auth'


const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const { pathname } = useLocation()
  const history = useHistory()

  const handleMenuToggle = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    setIsActive(false)
  }, [pathname])

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp

  }

  // handleMenuToggle()

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <span><Link to="logo">📀 </Link>
            </span>
          </div>
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/About Me">About Me</Link>
            </div>
          </div>
          <div className="navbar-end">
            {!userIsAuthenticated() ?

              <>
                <div className="buttons">
                  <Link className="button is-dark" to="/home">
                    Home
                  </Link>
                  <Link className="button is-dark" to="/Movies/AddMovies">
                    AddMovies
                  </Link>
            
                  <Link to="/movies" className="navbar-item">Movies</Link>
                </div>
                <Link className="button is-dark" to="/register">
                  Register
                </Link>
                <Link className="button is-dark" to="/login">
                  Log in
                </Link>
              </>
              :
              <button className="button is-dark" onClick={handleLogout}>Log Out</button>
            }
          </div>
        </div>
      </div>
    </nav>

  )

}


export default Navbar
