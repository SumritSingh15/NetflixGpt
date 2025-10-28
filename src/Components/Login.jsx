import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {

  const [signInForm, SetSignINForm] = useState(true);

  const ToggleSignIn = () => {
    SetSignINForm(!signInForm)
  }
  return (
    <div>
      <Header />
      <div >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg" alt="" bg-img className=" w-full absolute" />
      </div>

      <form className='p-12 bg-black opacity-80 w-115 absolute my-40 mx-auto right-0 left-0'>
        <h1 className='text-white  text-5xl mb-5'>{signInForm ? "Sign IN" : "Sign Up"}</h1>
        {!signInForm && (
          <input type='text' placeholder='Enter Full Name' className='p-4 m-4 bg-gray-600 w-full'></input>
        )

        }
        <input type='text' placeholder='Enter Email address' className='p-4 m-4 bg-gray-600 w-full'></input>
        <input type='Password' placeholder='Enter Password' className='p-4 m-4 bg-gray-600 w-full'></input>
        <button className='p-4  m-4 w-full bg-red-500 text-white'>{signInForm ? "Sign IN" : "Sign Up"}</button>
        <p className='py-4 mx-4 text-white cursor-pointer' onClick={ToggleSignIn}>{signInForm ? "Already A User Sign In Now " : "New to Netflix? Sign Up Now"}</p>
      </form>
    </div>
  )
}

export default Login
