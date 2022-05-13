import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const MovieList = (props) => {
    const [movie, setMovie] = useState(null)
    const [selectedMovie, setSelectedMovie] = useState('')

const apiKey = "k_19if06fk"

useEffect(() => {
  fetch(`https://imdb-api.com/en/API/InTheaters/${apiKey}`)
  .then(response => response.json())
  .then(data => {
    setMovie(data.items[0].fullTitle)
    console.log(data.items)
    console.log(data.items[0].fullTitle)
  })
}, []);



return (
    <div>
        <h1>New Movies</h1>
        {movie}
        
    </div>
)

}

export default MovieList;