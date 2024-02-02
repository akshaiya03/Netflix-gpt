import Login from "./Login"
import Browser from "./Browser"
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const Body=()=>{
  
  
    const appRouter= createBrowserRouter(
        [
         { path:"/",
           element:<Login/>,
           errorElement: <ErrorMessage/>
         },
         { 
          path:"/browse",
          element:<Browser/>,
          errorElement: <ErrorMessage/>
         },
         
        ]
      );
       
    return(
        <div>
          
            <RouterProvider router={appRouter}/>
            
        </div>
    )
}

export default Body