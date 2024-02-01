import CheckValidData from "../utils/Validate"
import Header from "./Header"
import { useRef, useState } from "react"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {  updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { USER_URL } from "../utils/constants";
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
           <div className="absolute ">
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
               alt="bg">
              </img>
             
            </div>
             
            <form 
            onSubmit={(e)=>e.preventDefault()}
            className="bg-black absolute text-white w-3/12 m-auto right-0 left-0 p-10 mt-40 opacity-85 rounded-md">
                <h1 className="text-2xl font-bold">{IsSignInform ? "Sign In" : "Sign Up"}</h1>
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