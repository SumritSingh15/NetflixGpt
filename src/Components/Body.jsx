import React from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'

const Body = () => {

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

  return (
    <div>
        <RouterProvider router={Approuter}/>
    </div>
    
  )
}

export default Body
