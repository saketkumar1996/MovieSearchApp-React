import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './logo.svg'
import MovieCard from './MovieCard'


//1b24a84c
const API_URL = 'http://omdbapi.com?apikey=1b24a84c'

const App = () => {
  const [movies,setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=>{
    searchMovies('Spiderman')
  },[]);

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  


  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className="search">
        <input
        value={searchTerm} 
        placeholder='search for movies'
        onChange={(e)=>setSearchTerm(e.target.value)}
         />
         <img src={SearchIcon} alt="search" 
         onClick={()=>searchMovies(searchTerm)}
         />
      </div>

      {
        movies?.length > 0 
        ? (<div className="container">
        {movies.map((movie)=>(
            <MovieCard movie={movie}/>
        ))}
        </div>
        ) : 
        (
          <div className='empty'> 
          <h2>No Movies Found</h2>
          </div>
        )
      }

      
    </div>
  )
}

export default App
