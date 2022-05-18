import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const MovieList = (props) => {




let displayedResults = ''

if (props.movie) {

   displayedResults = props.movie.map((item) => {
        return (
        <div>
        <li><Link to={'/' + item.id}><img src={item.image}/></Link></li>
        <li><Link to={'/' + item.id}>{item.fullTitle}</Link></li>        
        </div>
        )}
    ) 

}

//item.id is being used as a param to link to the data. It doesn't have to be that particular name, but best practice is to link it to the first key in the data. 

// ^^^^ have to loop the data outside of the useEffect (but I moved the useEffect to the other page anyway)





// const asArray = Object.entries(data.items)
// console.log(asArray[0][1])


return (
    <>
        <h1>Cinema on Tap</h1>
        <h2>Upcoming New Releases</h2>
        {displayedResults}
        
       
    
        
    </>
)

}

export default MovieList;