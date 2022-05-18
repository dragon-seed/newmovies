import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import MovieList from './MovieList'
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import TitleInfo from './TitleInfo'
import AcclaimedList from './AcclaimedList'
import GenreList from './GenreList'
import Genre from './Genre'
import Drama from'./Drama'

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
          <li><Link to="/watchlist">My Watchlist</Link></li>
          <li><Link to ="/genrelist">Releases by Genre</Link></li>
          <li><Link to ="/acclaimed">Critically Acclaimed</Link></li>
        </ul>
      </nav>
      <main>
      <Routes>
        <Route path="/" element={<MovieList movie={movie}/>}/>
        <Route path='/:movieid' element={<TitleInfo movie={movie} />}/>
        <Route path="/genrelist" element={<GenreList movie={movie} />}/>
        <Route path="/drama" element={<Drama movie={movie} />}/>
        {/* <Route path="/genreList/:movieid" element={<Genre movie={movie} />} /> */}
      </Routes>
      </main>
    </div>
  );
}

export default App;
