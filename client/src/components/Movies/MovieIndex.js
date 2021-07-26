/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'


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
      <div id="watch online">
        <div className="watch-online-container">
          <div className="column is-multiline">
            {movies.map(movie => {
              return (
                <div key={movie._id} className="column is-one-quarter-desktop is-one-third-tablet">
                  <div className="card">
                    <div className="card-header">
                      {/* <div className="card-header-title">{movie.title}</div> */}
                      {/* <div className="card-header-title">{movie.title}</div> */}
                      {/* <iframe src="https://www.youtube.com/non-embed/bHDl+ZTbdQ8" frameBorder="0" allowFullScreen></iframe> */}
                    </div>
                    <div className="movie poster">
                      <figure className="video video-is-1by1">
                        <video src={movie.video ? movie.video.url : ''} alt={movie.year} />
                        {/* <video src={movie.video} alt={movie.year} /> */}
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

export default MovieIndex
