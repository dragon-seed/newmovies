import { isCompositeComponent } from 'react-dom/test-utils'
import Genre from './Genre'
import Drama from './Drama'
import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";



const GenreList = (props) => {



return (
    <div>
    <li><Link to={'/action'}>Action</Link></li>
    <li><Link to={'/adventure'}>Adventure</Link></li>
    <li><Link to={'/animation'}>Animation</Link></li>
    <li><Link to={'/comedy'}>Comedy</Link></li>
    <li><Link to={'/documentary'}>Documentary</Link></li>
    <li><Link to={'/drama'}>Drama</Link></li>
    <li><Link to={'/history'}>History</Link></li>
    <li><Link to={'/horror'}>Horror</Link></li>
    <li><Link to={'/musical'}>Musical</Link></li>
    <li><Link to={'/romance'}>Romance</Link></li>
    <li><Link to={'/scifi'}>Sci-Fi</Link></li>
    <li><Link to={'/thriller'}>Thriller</Link></li>
    <li><Link to={'/war'}>War</Link></li>
</div>
    
)

    
}

export default GenreList;


   