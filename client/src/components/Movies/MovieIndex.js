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
    <section className="section">
      <div id="watch online">
        <div className="watch online container">
          <div className="column is-multiline">
            {movies.map(movie => {
              return (
                <div key={movie._id} className="column is-one-quarter-desktop is-one-third-tablet">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-header-title">{movie.title}</div>
                      {/* <div className="card-header-title">{movie.title}</div> */}
                    </div>
                    <div className="movie poster">
                      <figure className="image image-is-1by1">
                        {/* <img src={movie.image ? movie.image.url : ''} alt={movie.year} /> */}
                        <img src={movie.url} alt={movie.year} />
                      </figure>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Movies
