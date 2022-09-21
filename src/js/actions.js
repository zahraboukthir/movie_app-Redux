import {
  ADDMOVIE,
  EDITMOVIE,
  FILTERBYName,
  FILTERBYRate,
  DELETMOVIE,
  GetOneMovie,
} from "./actionsTypes";

export const addmovie = (newmovie) => {
  return { type: ADDMOVIE, payload: newmovie };
};
export const editmovie = (id, editedmovie) => {
  return { type: EDITMOVIE, payload: { id, editedmovie } };
};
export const deletmovie = (id) => {
  return { type: DELETMOVIE, payload: id };
};
export const filterbyname = (searchedname) => {
  return {
    type: FILTERBYName,
    payload: searchedname,
  };
};
export const filterbyrate = (ratevalue) => {
  return {
    type: FILTERBYRate,
    payload: ratevalue,
  };
};
export const moviedetails = (id) => {
  return { type: GetOneMovie, payload: id };
};
