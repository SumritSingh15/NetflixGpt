import React, { useEffect } from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/Firebase'
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from './utils/UserSlice';

const Body = () => {
const dispatch = useDispatch();

const Approuter = createBrowserRouter([
     {
        path: "/",
        element: <Login/>,
     },
     {
        path: "/browse",
        element: <Browse/>,
     }
])

useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
  
    const {uid,email,displayName} = user;
    // ...
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))


  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
   
  }
});
},[])
  return (
    <div>
        <RouterProvider router={Approuter}/>
    </div>
    
  )
}

export default Body
