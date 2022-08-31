import React from 'react'

const MovieCard = ({el}) => {
  return (
    <div className="card">
    
    <img className="movie__image" src={el.image} alt={el.name} />
    <div className="flex__card">
      <h3 className="heading"> {el.name} </h3>
      <p className="paragraph"> {el.date} </p>
      <p className="paragraph"> {el.rating} </p>
      <button variant="primary">
           Description
          </button>
      <br />
    </div>
  </div>
  )
}

export default MovieCard