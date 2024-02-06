import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
   
 return (
   <div className='p-4 pl-3' >
    <h1 className='font-semibold md:text-2xl text-lg pl-2 text-white '>{title}</h1>
    <div className='flex '>
       
       <div className='w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide relative'>
           {movies && movies.map((movie)=>(
                <MovieCard key={movie.id} posterPath={movie.poster_path} />

                ))}
       
       </div>
       </div>
       
      
   </div>
 )
}

export default MovieList
