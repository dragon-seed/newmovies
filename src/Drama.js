import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Drama = (props) => {

  
 let displayDramas = ''

 if (props.movie) {


    for(let i = 0; i < props.movie.length; i ++) {
        for(let j = 0; j < props.movie[i].genreList.length; j++) {
        if(props.movie[i].genreList[j].key === "Drama") {
            displayDramas = [props.movie[i].fullTitle, props.movie[i].image]
        }
        }
    }

 }

console.log(displayDramas)

return (
    <div>
        <h1>{displayDramas[0]}</h1>
        <img src={displayDramas[1]}/>
    </div>
)
}

export default Drama;