import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggessions = () => {

  const {movieName,movieResult}=useSelector(store=>store.gpt)
  if(!movieName)return null;
  return (
    <div className='m-4'>
      <div className='bg-black opacity-90 text-white p-4 m-2'>
        {movieName.map((movieName,index)=> 
        <MovieList key={movieName} title={movieName} movies={movieResult[index]}/>)}
        
      </div>
    </div>
  )
}

export default GPTMovieSuggessions
