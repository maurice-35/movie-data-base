/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/movies')
        setMovies(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log('MOVIES ON STATE', movies)
  return (
    <>
      <h1>Movies live here</h1>
      
    </>
  )
}

export default Movies
