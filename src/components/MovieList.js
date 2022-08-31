import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'
const MovieList = () => {
 const list=useSelector((state)=>state.movieslist)
 const sv=useSelector((state)=>state.searchedname)
 const rv=useSelector((state)=>state.ratevalue)
  return (
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
        {
          list.filter(el=>el.name.toUpperCase().includes(sv.toUpperCase()) && el.rating>=+rv)
        .map(
            (el)=><MovieCard el={el} key={el.id}/>
        )
      }
    </div>
  )
}

export default MovieList