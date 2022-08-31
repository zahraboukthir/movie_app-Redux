import { ADDMOVIE, FILTERBYName } from "./actionsTypes";
const initstate = {
  movieslist: [
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      rating: 5,
      name: "Star Wars: The Rise Of Skywalker",
      date: "December 2019",
      desc: "description 1",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      rating: 4,
      name: "Avengers: Infinity War",
      date: "April 2018",
      desc: "description 2",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      rating: 4,
      name: "Frozen II",
      date: "November 2019",
      desc: "description 3",
    },
    {
      id: Math.random(),
      image:
        "https://i1.wp.com/easttennessean.com/wp-content/uploads/2016/11/FantasticBeasts.png?fit=500%2C639&ssl=1",
      rating: 3,
      name: "Fantastic Beasts and Where to Find Them",
      date: "November 2016",
      desc: "description 4",
    },
  ],
  searchedname:""
};
const movieReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case ADDMOVIE:
      return { ...state, movieslist: [...state.movieslist, payload] };
    case FILTERBYName:
 return{
  ...state,searchedname:payload
 }
    default:
      return state;
  }
};
export default movieReducer;
