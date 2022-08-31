
import './App.css';
import ADDMovie from './components/ADDMovie';
import { FilterBN } from './components/FilterBN';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <FilterBN/>
      <ADDMovie/>
     <MovieList/>
    </div>
  );
}

export default App;
