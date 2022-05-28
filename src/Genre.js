// import React, {useState, useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
// import {useParams} from 'react-router';
import { genreText } from './textHelper'
import MovieList from './MovieList'

function Genre({genre, movie}) {  //putting props in curly brackets negates need for "props"

    
        let displayGenre = [];
      
        if (movie) {
          for (let i = 0; i < movie.length; i++) {
            for (let j = 0; j < movie[i].genreList.length; j++) {
              if (movie[i].genreList[j].key === genreText[genre]) {
                  displayGenre.push(movie[i])
                console.log([movie[i].fullTitle, movie[i].image]);
              }
            }
          }
        }
      
        console.log(displayGenre);
      
        return (
        //   <div>
        //     <h1>{displayGenre[0]}</h1>
        //     <img src={displayGenre[1]} />
        //   </div>
        <MovieList movie={displayGenre}/>
        );
      


}

export default Genre