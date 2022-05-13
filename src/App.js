import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import MovieList from './MovieList'
import { Link, Routes, Route, Navigate } from 'react-router-dom';

function App() {


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
        <Route path="/" element={<MovieList/>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
