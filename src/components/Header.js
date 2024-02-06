import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import {  onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "../utils/userSlice";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { ToggleGptsearch } from "../utils/GptSlice";
import { ChangeLang } from "../utils/configSlice";

const Header=()=>{
    const navigate =useNavigate();
    const dispatch =useDispatch();
    const user = useSelector(store => store.user)
    const GptSearch = useSelector(store=> store.gpt.ShowGptSearch)
    
const handleSignout=()=>{
        const auth = getAuth();
signOut(auth).then(() => {})
.catch((error) => {
   
});
    }
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const {uid,email,displayName,photoURL} = user;
            dispatch(adduser({uid:uid,email:email,displayName: displayName ,photoURL:photoURL}));
            
            navigate("/browse")
          } else {
            dispatch(removeuser());
            navigate("/")
          }
          
        });
     return ()=> unsubscribe();
       },[])

      const handlegptSearch=()=>{
         dispatch(ToggleGptsearch())
       }

       const handleChangelang=(e)=>{
          dispatch(ChangeLang(e.target.value))
       }
    return(
        <div className="flex justify-between">
          <div className="absolute p-4 w-full bg-gradient-to-b from-black z-20 flex justify-between">
           <img 
           className="md:w-56 w-20 h-10 md:h-auto"
           src={LOGO_URL} alt="logo"></img>
           


        { user && <div className="flex">
        <div className="md:pt-2 md:m-0 m-2 ">
         { GptSearch && <select 
         onChange={handleChangelang}
         className="md:h-9 rounded-sm bg-gray-900 text-white md:text-[16px] text-sm h-6 ">
           {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
         </select>}
        </div>
        <button 
        className="bg-purple-700 md:h-10 m-2 md:p-2 text-sm md:text-[16px] h-7 rounded-md  p-1 md:rounded-lg  text-white"
        onClick={handlegptSearch}
        >{GptSearch?"HomePage":"Search"}</button>
        <img 
        src ={user?.photoURL}
        alt="userimg"
        className="p-2 md:w-14 w-11 h-11 md:h-14"
        ></img>
        
         <button className="text-white h-12 md:font-semibold md:text-[17px] text-sm "
         onClick={handleSignout}
         >(Sign out)</button>
      </div>}
      </div>
      
            
        </div>
    )
}
export default Header;