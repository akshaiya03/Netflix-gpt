import React, { useRef } from 'react'
import openai  from '../utils/Openai';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addGptResults } from '../utils/GptSlice';

const GPTSearchBar = () => {

const searchText= useRef(null);
const dispatch =useDispatch();

const langGpt =useSelector(store=> store.config.lang)

const searchMovieTMBD = async(movie)=>{
     const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+
     movie +
     "&include_adult=false&language=en-US&page=1",API_OPTIONS )

     const json= await data.json()
     return json.results
}

const handlegptSearch= async()=>{
   const result =searchText.current.value
   console.log(result)

   const GptQuery= "Act as a movie recommendation system and suggest some movies for the query :"+
    result +
    ". only give me names of five movies,comma seperated like the Example result given ahead. Example result: mersal,theri,sarkar,leo,darbar";

   const gptMovies = await openai.chat.completions.create({
    messages: [{ role: 'user', content: GptQuery }],
    model: 'gpt-3.5-turbo',
  });
  console.log(gptMovies.choices?.[0]?.message?.content);

  const movieArray = gptMovies.choices?.[0]?.message?.content.split(",")
  

  const promiseArray =movieArray.map((movie)=>searchMovieTMBD(movie))
  

  const tmbdResults = await Promise.all(promiseArray);

  console.log(tmbdResults);

  dispatch(addGptResults({movieName:movieArray,movieResult:tmbdResults}))
}

  return (
    <div className="md:pt-[9%] pt-[18%] flex justify-center">
      <form 
      onSubmit={(e)=>(e).preventDefault()}
      className="w-1/2 bg-black rounded-sm grid-cols-12 flex"> 
        <input 
        ref={searchText}
        className="md:p-4 p-1 md:ml-4 md:mt-4 md:mb-4 m-2 w-full col-span-9 md:text-[16px] text-xs"
        type="text"
        placeholder={lang[langGpt].gptPlaceholder}></input>
        <button 
        onClick={handlegptSearch}
        className="md:w-40 md:m-4 m-2 md:p-0 p-1 rounded-sm bg-red-700 md:rounded-md text-white">{lang[langGpt].Search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
