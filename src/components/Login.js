import React, { useState } from 'react';
import {logo} from './logo.jpg'
import Header from './Header';

const Login = () => {
  const[isSignInForm,setisSignInForm]=useState(true);
  const toggleButton=()=>{
    setisSignInForm(!isSignInForm);

  }





  return (
    <div>
      <div>
        {/* <Header/> */}
        <div >
        
         <form className='w-3/12  absolute p-12 bg-black mx-auto right-0 left-0 top-36 bg-opacity-80 text-white rounded-md '>
            <h1 className='text-white font-bold text-3xl mb-4'>{isSignInForm? "Sign In":"Sign Up" }</h1>
            { !isSignInForm && (<input type="text" placeholder='Full Name'
                className='p-3 m-2  w-full bg-gray-600' />)} 

            <input type="text" placeholder='Email'
             className='p-3 m-2  w-full bg-gray-600' />

            <input type="password" placeholder='Password'
             className='p-3 m-2 w-full bg-gray-600' />
            <button className='p-3 m-2 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In":"Sign Up" }</button>
            <p className='py-4 cursor-pointer' onClick={toggleButton}>
              {isSignInForm? "New to WRealm ? Sign Up Now":"Already registered ? Sign In Now" }
              </p>
         </form>
        </div>
        </div>
        
    </div>
  )
}

export default Login;