
import Header from "./Header";
import useNowPlayingMovies from "../hooks/usenowplayingmovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";


const Browser=()=>{
   
 useNowPlayingMovies();

    return(
       <div >
          <Header/> 
          <MainContainer/>
          <SecondaryContainer/>
       
    </div>
    )
    }

export default Browser;