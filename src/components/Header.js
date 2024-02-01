import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import {  onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "../utils/userSlice";
import { useEffect } from "react";
import { auth } from "../utils/firebase";

const Header=()=>{
    const navigate =useNavigate();
    const dispatch =useDispatch();
    const user = useSelector(store => store.user)
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
    return(
        <div className="flex justify-between">
          <div className="absolute p-4 w-full bg-gradient-to-b from-black z-20 flex justify-between">
           <img 
           className="w-56"
           src={LOGO_URL} alt="logo"></img>
   


        { user && <div className="flex">
        <img 
        src ={user?.photoURL}
        alt="userimg"
        className="p-2 w-14 h-14"
        ></img>
         
         <button className="text-white  font-semibold "
         onClick={handleSignout}
         >(Sign out)</button>
      </div>}
      </div>
      
            
        </div>
    )
}
export default Header;