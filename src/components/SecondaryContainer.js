import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies=useSelector(store=>store.movies)
    
  return (
    <div className='bg-black'>
      <div className='md:-mt-[272px] mt-0 relative z-20'>
      <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.TrendingMovies}/>
      <MovieList title={"popular"} movies={movies?.PopularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.UpcomingMovies}/>
      <MovieList title={"Horror"} movies={movies?.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
