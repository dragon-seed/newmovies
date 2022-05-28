import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import MovieList from './MovieList'
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import TitleInfo from './TitleInfo'
import AcclaimedList from './AcclaimedList'
import GenreList from './GenreList'
import Genre from './Genre'


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
        <h1>New Films on Tap</h1>
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
        <Route path="/action" element={<Genre genre="action" movie={movie} />}/>
        <Route path="/adventure" element={<Genre genre="adventure" movie={movie} />}/>
        <Route path="/animation" element={<Genre genre="animation" movie={movie} />}/>
        <Route path="/comedy" element={<Genre genre="comedy" movie={movie} />}/>
        <Route path="/crime" element={<Genre genre="crime" movie={movie} />}/>
        <Route path="/documentary" element={<Genre genre="documentary" movie={movie} />}/>
        <Route path="/drama" element={<Genre genre="drama" movie={movie} />}/>
        <Route path="/history" element={<Genre genre="history" movie={movie} />}/>
        <Route path="/horror" element={<Genre genre="horror" movie={movie} />}/>
        <Route path="/musical" element={<Genre genre="musical" movie={movie} />}/>
        <Route path="/romance" element={<Genre genre="romance" movie={movie} />}/>
        <Route path="/scifi" element={<Genre genre="scifi" movie={movie} />}/>
        <Route path="/thriller" element={<Genre genre="thriller" movie={movie} />}/>
        <Route path="/war" element={<Genre genre="war" movie={movie} />}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
