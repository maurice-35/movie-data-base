import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/Home'
import MovieIndex from './components/Movies/MovieIndex'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

// const App = () => {

// import React from 'react'
// import axios from 'axios'
// import { Carousel } from 'react-bootstrap'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/Movies" component={MovieIndex} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/About Me" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App