/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
// import { getTokenFromLocalStorage, getPayload } from '../../helpers/auth'


const MovieShow = () => {
  const [movie, setMovie] = useState([])
  const [hasError, setHasError] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    console.log('USE')
    const getData = async () => {
      console.log('Try')
      try {
        const { data } = await axios.get(`/api/movies/${id}`)
        setMovie(data)
        console.log('DATA', data)
      } catch (err) {
        setHasError(true)
        console.log('Error', err)
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log('working')
  console.log('params', id)

  // console.log('Movie', movie.owner.username)

  const userIsOwner = (userId) => {
    const payload = getPayload()
    if (!payload) return false
    return userId === payload.sub
  }
  console.log(userIsOwner)
  // console.log(payload)
  return (
    <section id="body-content" className="section">
      <div className="container">
        {movie ?
          <div>
            <h2 className="title has-text-centered">{movie.title}</h2>
            <hr />
            <div className="others">
              <h4 className="title is-4"><span role="img" aria-label="plate"></span> Description</h4>
              <p>{movie.description}</p>
              <hr />
              <div className="column is-half">
                <figure className="image">
                  <img src={movie.image} alt={movie.name} />
                </figure>
              </div>
              <div className="columns">
                <div className="d-block w-100">
                  <div>
                    <figure className="video">
                      <iframe width="1000" height="581" src={movie.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </figure>
                  </div>
                </div>
                <div className="container">
                  <h4 className="title is-4"><span role="img" aria-label="globe">🔊</span>Audio_language</h4>
                  <hr />
                  <p>{movie.audio_language}</p>
                  <hr />
                  <h4 className="title is-4"><span role="img" aria-label="globe">🕰</span>Run_time_mins</h4>
                  <hr />
                  <p>{movie.run_time_mins}</p>
                  <hr />
                  <h4 className="title is-4"><span role="img" aria-label="globe">🗓</span>Year</h4>
                  <hr />
                  <p>{movie.year}</p>
                  <hr />
                  <h4 className="title is-4"><span role="img" aria-label="globe">⏱</span>Views_count</h4>
                  <hr />
                  <p>{movie.views_count}</p>
                  <hr />
                  <h4 className="title is-4"><span role="img" aria-label="eyes">👀</span>Worth_a_watch</h4>
                  <hr />
                  <p>{movie.Worth_a_watch}</p>
                  <hr />
                  <h4 className="title is-4"><span role="img" aria-label="point">☝🏻☝</span> Added By</h4>
                  <hr />
                </div>
                <p>{movie.owner.username}</p>
                <hr />
                {/* {userIsOwner(movie.owner.id) && */}
                <div className="buttons">
                  <button className="button is-danger">Delete Movie</button>
                  <Link to={`/movies/${id}/edit`} className="button is-warning">Edit Movie</Link>
                </div>
                
              </div>
            </div>
          </div>
          :
          <h2 className="title has-text-centered">
            {hasError ? 'Oh something went wrong, the sadness 😞' : '...loading 📀'}
          </h2>
        }
      </div>
    </section>

  )

}

export default MovieShow