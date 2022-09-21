import "./App.css";
import ADDMovie from "./components/ADDMovie";
import { FilterBN } from "./components/FilterBN";
import FilterBR from "./components/FilterBR";
import {Route,Routes,Link} from 'react-router-dom'
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import EditMovie from './components/EditMovie';

function App() {
  return (
   
    <div className="App">
       <Routes>
        <Route path="/" element={ <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FilterBN />
          <FilterBR />
        </div>
        <Link to="/add"> ADD MOVIE</Link>
      </div> 
      <MovieList /></div>}  />
      

      <Route path="/:id" element={<MovieDetails/>}/>
      <Route path="/edit/:id" element={<EditMovie/> }/>
      <Route path="/add" element={<ADDMovie /> }/>
      </Routes>
    </div>
  );
}

export default App;
