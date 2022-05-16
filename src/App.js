import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import MovieList from './MovieList'
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import TitleInfo from './TitleInfo'

function App() {

  const [movie, setMovie] = useState(null)

  const apiKey = "k_19if06fk"



useEffect(() => {
  fetch(`https://imdb-api.com/en/API/ComingSoon/${apiKey}`)
  .then(response => response.json())
  .then(data => {
      setMovie(data.items)
    
  })
}, []);


  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">New Releases</Link></li>
          <li><Link to="/watchlist">Watchlist</Link></li>
        </ul>
      </nav>
      <main>
      <Routes>
        <Route path="/" element={<MovieList movie={movie}/>}/>
        <Route path='/:movieid' element={<TitleInfo movie={movie} />}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
