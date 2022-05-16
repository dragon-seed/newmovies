import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {useParams} from 'react-router';

const TitleInfo = (props) => {

// const [displayMovie, setDisplayMovie] = useState([])
// const [paramsData, setParamsData] = useState()

let params = useParams();


//this returns an array with one object inside of it 
let selectedMovie = props.movie.filter((item) => {
    return item.id === params.movieid
})[0]

console.log(selectedMovie)

//the filter is returning an array and we are just getting the first index of it by adding the [0] at the very end of the function (You did this a different way on pokemonapp (pokemon.js) with selectedPokemon[0])
 

//not adding a conditional here since the data should be here by now, but if there are issues then add it

return (
    <div>
       <h1>{selectedMovie.fullTitle}</h1> 
       <img src={selectedMovie.image}/>
       <p>{selectedMovie.plot}</p>
    </div>
)


  

}

export default TitleInfo