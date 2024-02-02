import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
   console.log(movies)
 return (
   <div className='p-4 pl-4' >
    <h1 className='font-semibold text-2xl pl-2 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll'>
       
       <div className='flex'>
           {movies && movies.map((movie)=>(
                <MovieCard key={movie.id} posterPath={movie.poster_path} />

                ))}
       
       </div>
       </div>
       
      
   </div>
 )
}

export default MovieList
