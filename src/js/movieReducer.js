import {
  ADDMOVIE,
  DELETMOVIE,
  EDITMOVIE,
  FILTERBYName,
  FILTERBYRate,
  GetOneMovie,
} from "./actionsTypes";
import { initstate } from "./initState";

const movieReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case ADDMOVIE:
      return { ...state, movieslist: [...state.movieslist, payload] };
    case EDITMOVIE:
      return {
        ...state,
        movieslist: state.movieslist.map((movie) =>
          movie.id === payload.id ? { ...movie, ...payload.editedmovie } : movie
        ),
      };
    case DELETMOVIE:
      return {
        ...state,

        movieslist: state.movieslist.filter((movie) => movie.id !== payload),
      };
    case FILTERBYName:
      return {
        ...state,
        searchedname: payload,
      };
    case FILTERBYRate:
      return {
        ...state,
        ratevalue: payload,
      };
    case GetOneMovie:
      return {
        ...state,
        movieDetails: state.movieslist.find((movie) => movie.id == payload),
      };
    default:
      return state;
  }
};
export default movieReducer;
