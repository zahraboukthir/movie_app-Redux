import React from 'react'
import { deletmovie } from '../js/actions'
import EditMovie from './EditMovie'
import { useDispatch } from 'react-redux';

const MovieCard = ({el}) => {
  const dispatch=useDispatch()
  return (
    <div className="card">
    
    <img className="movie__image" src={el.image} alt={el.name} />
    <div className="flex__card">
      <h3 className="heading"> {el.name} </h3>
      <p className="paragraph"> {el.date} </p>
      <p className="paragraph"> {el.rating} </p>
      <EditMovie el={el}/>
      <button onClick={()=>dispatch(deletmovie(el.id))} variant="primary">
           Delet movie
          </button>
      <br />
    </div>
  </div>
  )
}

export default MovieCard