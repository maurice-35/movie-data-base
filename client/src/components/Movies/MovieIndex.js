/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
// import { Link }  from 'react-router-dom'


const MovieIndex = () => {
  const [movies, setMovies] = useState([])
  const [hasErrors, setHasErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/movies/')
        setMovies(data)
      } catch (err) {
        setHasErrors(true)
      }
    }
    getData()
  }, [])

  console.log('MOVIES ON STATE', movies)

  return (
    <section className="section">
      <div className="container">
        {movies.length > 0 ?
          <div className="columns is-multiline">
            {movies.map(movie => {
              return <MovieCard key={movie._id} {...movie} />
            })}
          </div>
          :
          <h2 className="title hes-text-content">
            {hasErrors ? 'Something has gone wrong' : 'loading...📀'}
          </h2>
        }
      </div>
    </section>
  )
}

export default MovieIndex
