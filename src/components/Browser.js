
import Header from "./Header";
import useNowPlayingMovies from "../hooks/usenowplayingmovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTrendingMovies from "../hooks/useTrendingMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";


const Browser=()=>{
   
 useNowPlayingMovies();
 usePopularMovies();
 useTrendingMovies();
 useUpcomingMovies();

    return(
       <div >
          <Header/> 
          <MainContainer/>
          <SecondaryContainer/>
       
    </div>
    )
    }

export default Browser;