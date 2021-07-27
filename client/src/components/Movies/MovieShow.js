/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const MovieShow = () => {
  const [movie, setMovie] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/movies${id}`)
        setMovie(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])
  // console.log('params', id)

  // console.log('Movie', movie)

  return (
    <section className="section">
      <div className="container">
        {movie ?
          <div>
            <h2 className="title has-text-centered">{movie.title}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={movie.video} alt={movie.title} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4"><span role="img" aria-label="plate"></span> Description</h4>
                <p>{movie.description}</p>
                <hr />
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
                <h4 className="title is-4"><span role="img" aria-label="globe">👀</span>Worth_a_watch</h4>
                <hr />
                <p>{movie.video_worth_a_watch}</p>
                <hr />
                <h4 className="title is-4"><span role="img" aria-label="wave">☝🏻☝</span> Added By</h4>
                <hr />
                {/* <p>{movie.user.username}</p>
                <hr /> */}
                {/* {userIsOwner(movie.user._id) &&
                  <div className="buttons">
                    <button onClick={handleDelete} className="button is-danger">Delete Movie</button>
                    <Link to={`/movies/${id}/edit`} className="button is-warning">Edit Movie</Link>
                  </div>
                } */}
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