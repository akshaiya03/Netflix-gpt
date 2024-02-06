
import Header from "./Header";
import useNowPlayingMovies from "../hooks/usenowplayingmovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTrendingMovies from "../hooks/useTrendingMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import GptSearch from "./GptSearch.js";
import {  useSelector } from "react-redux";

const Browser=()=>{
     
const gptPage= useSelector(store=>store.gpt.ShowGptSearch)

 useNowPlayingMovies();
 usePopularMovies();
 useTrendingMovies();
 useUpcomingMovies();

    return(
       <div className="no-scrollbar" >
          <Header/> 
          {
            gptPage ? (<GptSearch/> ) :(
               <>
               <MainContainer/>
              <SecondaryContainer/>
              </>
            )
          }
          
          
       
    </div>
    )
    }

export default Browser;