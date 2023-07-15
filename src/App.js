import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from'./search.svg';
import MovieCard from "./MovieCard";
//913baebf
const API_URL='http://www.omdbapi.com?apikey=913baebf';


const App=()=>{
    const[movies,setMovies]=useState([]);
    const[searchTerm,setSeacrchTerm]=useState('');

    const searchMovies=async(title)=>{
        const response =await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
    }
    useEffect(()=>{
        searchMovies('spiderman');
    },[])
    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                placeholder="Search for movie"
                value={searchTerm}
                onChange={(e)=>setSeacrchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length>0?
                ( 
                <div className="container">
               {
                movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                ))
               }
                </div>
                )
                :
                (
                    <div className="empty">
                        <h2>no movies found</h2>
                        </div>
                )
            }
           
        </div>
    );
}

export default App;