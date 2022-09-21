import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterbyrate } from './../js/actions';
import Rating from '@mui/material/Rating';
const FilterBR = () => {
    const [rate, setrate] = useState(0);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterbyrate(rate));
  }, [rate,dispatch]);
  return (
    <div>  <Rating
    name="simple-controlled"
    value={rate}
    onChange={(event, newValue) => {
      setrate(newValue);
    }}
  />
      
       {/* <input type="Number" onChange={(e) => setrate(e.target.value)} value={rate}/> */}
       </div>
  )
}

export default FilterBR