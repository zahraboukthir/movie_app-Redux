
import './App.css';
import ADDMovie from './components/ADDMovie';
import { FilterBN } from './components/FilterBN';
import FilterBR from './components/FilterBR';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <FilterBN/>
      <FilterBR/>
      <ADDMovie/>
     <MovieList/>
    </div>
  );
}

export default App;
