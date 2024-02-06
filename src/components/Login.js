import CheckValidData from "../utils/Validate"
import Header from "./Header"
import { useRef, useState } from "react"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {  updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { BG_URL, USER_URL } from "../utils/constants";
const Login=()=>{
  
  const dispatch=useDispatch();

    const[IsSignInform,setIsSignInform]=useState(true)
    const[errormessage,seterrormessage]=useState(null)
    const toggleform=()=>{
        setIsSignInform(!IsSignInform);
    }
    const email =useRef();
    const password=useRef();
    
    const handleclick=()=>{
        const message = CheckValidData(email?.current?.value,password?.current?.value);
        seterrormessage(message);
        console.log(password?.current?.value)
        if(message)return;

        if(!IsSignInform){
          createUserWithEmailAndPassword(auth, email?.current?.value,password?.current?.value)
          .then((userCredential) => {
            
            const user = userCredential.user;
            updateProfile(user, {
              displayName: "Akshaiya S", photoURL: USER_URL
            }).then(() => {
             
                  
                  const {uid,email,displayName,photoURL} = auth.currentUser;
                  dispatch(adduser({
                    uid:uid,
                    email:email,
                    displayName: displayName ,
                    photoURL:photoURL})); 
            })
              
            .catch((error) => {
              seterrormessage(error.message);
            });
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormessage(errorCode + "=" + errorMessage);
          
          });

        
        }
        else{
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
       .then((userCredential) => {
      
       const user = userCredential.user;
       console.log(user);
       updateProfile(auth.currentUser, {
        displayName: "Akshaiya S", photoURL: USER_URL
      }).then(() => {
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(adduser({
          uid:uid,
          email:email,
          displayName: displayName ,
          photoURL:photoURL})); 
  })
    
  })
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode + "=" + errorMessage);
  });

        }
    }
    return(
        <div >
           <Header/>
           <div className="absolute">
              <img
              className="h-screen object-cover md:h-auto"
              src={BG_URL}
               alt="bg">
              </img>
             
            </div>
             
            <form 
            onSubmit={(e)=>e.preventDefault()}
            className="bg-black absolute text-white md:w-3/12 md:m-auto m-12 md:right-0 md:left-0 md:p-10 p-6 mt-44 md:mt-40 opacity-85 rounded-md">
                <h1 className="md:text-2xl text-xl font-bold">{IsSignInform ? "Sign In" : "Sign Up"}</h1>
                {!IsSignInform && (<input 
                  type="name"
                  placeholder="Full name"
                  className="w-full p-4 mt-11 bg-black opacity-100 border border-w rounded-md">

                  </input>)}
                
                <input 
                 ref={email}
                  type="email"
                  placeholder="Email address or Phone number"
                  className="w-full p-4 my-6 bg-black opacity-100 border border-w rounded-sm">

                  </input>
                 
                <input 
                ref={password}
                  type="password" 
                  placeholder="password" 
                  className="w-full p-4 bg-black opacity-100 border border-white rounded-sm">

                </input>
                <p className=" text-red-600">{errormessage}</p>
               
                <button 
                className="p-4 w-full bg-red-600 my-6 rounded-sm hover:bg-red-800"
                onClick={handleclick}
                >
                {IsSignInform ? "Sign In" :"Sign Up"}
                
                </button>

                <h4 className="text-center hover:underline cursor-pointer">Forget password?</h4>
                <p className="py-4 my-4 cursor-pointer  " onClick={toggleform}>New to Netflix? sign Up now.</p>
            </form>
        </div>
    )
}
export default Login