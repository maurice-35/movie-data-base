import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
        <Route path="/Movies">
          <MovieIndex />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App