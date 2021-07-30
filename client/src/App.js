import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/common/Home'
import MovieIndex from './components/Movies/MovieIndex'
import MovieShow from './components/Movies/MovieShow'
import AddMovies from './components/Movies/AddMovies'
import Navbar from './components/common/Navbar'
import Profile from './components/userProfile/Profile'
import Footer from './components/Footer'




const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/About Me' component={About} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/Movies/AddMovies' component={AddMovies} />
        <Route path='/Movies/:id' component={MovieShow} />
        <Route path='/Movies' component={MovieIndex} />
        <Route path='/user' component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App