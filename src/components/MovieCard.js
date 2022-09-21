import React from 'react'
import { deletmovie, moviedetails } from '../js/actions'
import EditMovie from './EditMovie'
import { useDispatch } from 'react-redux';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'

const MovieCard = ({el}) => {
  const dispatch=useDispatch()
  return (
    <div className="card">
    
    <img className="movie__image" src={el.image} alt={el.name} />
    <div className="flex__card">
      <h3 className="heading"> {el.name} </h3>
      <p className="paragraph"> {el.date} </p>
      <Rating
   readOnly 
  value={el.rating} 
  
/>
      {/* <p className="paragraph"> {el.rating} </p> */}
      <div style={{display:'flex',justifyContent:'space-around'}}>
      <Link to={`/edit/${el.id}`}><button  variant="primary">
          Edit
          </button>
         </Link>
      
      <button onClick={()=>dispatch(deletmovie(el.id))} variant="primary">
           Delet movie
          </button>
          <Link to={`/${el.id}`}><button onClick={()=>dispatch(moviedetails(el.id))} variant="primary">
           Details
          </button>
         </Link>
          </div>
         {/* <MovieDetails el={el}/> */}
        
      <br />
    </div>
  </div>
  )
}

export default MovieCard