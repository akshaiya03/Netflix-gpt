import React from 'react'
import GPTSearchBar from './GPTsearchBar'
import { BG_URL } from '../utils/constants'
import GPTMovieSuggessions from './GPTMovieSuggessions'




const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-10 '>
        <img 
        className='md:h-auto h-screen object-cover'
        src={BG_URL}
         alt="bg">
        </img>
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggessions/>
    </div>
    
    
  )
}

export default GptSearch
