import React from 'react'
import { Link } from 'react-router-dom'


const MovieCard = ({ id, image, title, year }) => {
  // console.log('props', props)
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/movies/${id}/`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{title}</div>
          </div>
          <div className="card-image">
            <figure className="image image -is-1by1">
              <iframe width="560" height="315" src={image} alt={title} title="YouTube image" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </figure>
          </div>
          <div className="card-container">
            <h5>{year}</h5>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default MovieCard
