import Header from "./Header"
const Login=()=>{
    return(
        <div className="">
           <Header/>
           <div className="absolute">
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
               alt="bg">
              </img>
            </div>
             
            <form className="bg-black absolute text-white w-3/12 m-auto right-0 left-0 p-10 mt-36 opacity-85">
                <h1 className="text-2xl font-bold">Sign In</h1>
                <input type="email" placeholder="Email address" className="w-full p-4 my-6 bg-black opacity-100 border border-w rounded-md"></input>
                <input type="password" placeholder="password" className="w-full p-4 bg-black opacity-100 border border-white rounded-md"></input>
                <button className="p-4 w-full bg-red-600 my-6 rounded-md">Sign In</button>
                <h4 className="text-center">Forget password?</h4>
                <p className="py-4 my-4">New to Netflix? sign Up now.</p>
            </form>
        </div>
    )
}
export default Login