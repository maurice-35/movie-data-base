/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link }  from 'react-router-dom'


const MovieIndex = () => {
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
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {movies.map(movie => 

            <div key={movie._id} className="column is-one-quarter-desktop is-one-third-tablet">
              <div className="card">
                <div className="card-header">
                  <div className="card-herder-title">{movie.title}</div>
                </div>
                <div className="card-image">
                  <figure className="video image -is-1by1">
                    <iframe width="560" height="315" src={movie.video} alt={movie.title} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </figure>
                </div>
                <div className="card-container">
                  <h5>{movie.year}</h5>
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
    </section>
  )
}

export default MovieIndex
