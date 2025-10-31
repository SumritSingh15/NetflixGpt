import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import CheckValidData from './utils/ValidData';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/UserSlice';
const Login = () => {

  const [signInForm, SetSignINForm] = useState(true);
  const [errormessage, seterrormessage] = useState(null)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleData = () => {
    const message = CheckValidData(email.current.value, password.current.value
    );
    seterrormessage(message)
    if (message) return;

    if (!signInForm) {
      //sign up from
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName } = auth.currentUser;
            // ...
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
            // ...
            navigate("/browse")
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          seterrormessage(errorCode + " - " + errorMessage)
        });

    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          navigate("/browse")
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + " - " + errorMessage)
        });
    }
  }

  const ToggleSignIn = () => {
    SetSignINForm(!signInForm)
  }
  return (
    <div>
      <Header />
      <div >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg" alt="" bg-img className=" w-full absolute" />
      </div>

      <form onSubmit={(e) => { e.preventDefault() }} className='p-12 bg-black opacity-80 w-115 absolute my-40 mx-auto right-0 left-0'>
        <h1 className='text-white  text-5xl mb-5'>{signInForm ? "Sign IN" : "Sign Up"}</h1>
        {!signInForm && (
          <input ref={name} type='text' placeholder='Enter Full Name' className='p-4 m-4 bg-gray-600 w-full'></input>
        )

        }
        <input ref={email} type='text' placeholder='Enter Email address' className='p-4 m-4 bg-gray-700 w-full'></input>

        <input ref={password} type='password' placeholder='Enter Password' className='p-4 m-4 bg-gray-700 w-full'></input>
        <p className='text-red-500 p-2 m-2'>{errormessage}</p>
        <button className='p-4  m-4 w-full bg-red-500 text-white' onClick={HandleData}>{signInForm ? "Sign IN" : "Sign Up"}</button>
        <p className='py-4 mx-4 text-white cursor-pointer' onClick={ToggleSignIn}>{signInForm ? "Already registered? Sign In Now. " : "New to Netflix? Sign Up Now"}</p>
      </form>
    </div>
  )
}

export default Login
