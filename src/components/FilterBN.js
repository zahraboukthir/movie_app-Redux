import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterbyname } from "../js/actions";

export const FilterBN = () => {
  const [inp, setInp] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterbyname(inp));
  }, [inp,dispatch]);

  return (
    <div>
      <input type="text" onChange={(e) => setInp(e.target.value)} value={inp}/>
    </div>
  );
};
