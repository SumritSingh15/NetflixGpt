import React from 'react'
import { auth } from './utils/Firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector((store)=>store.user)
  const navigate = useNavigate();
  const Handlesignout = ()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
})
  }
  return (
      <div className="absolute px-8 py-2 bg-linear-to-b from-black to-transparent z-50 w-full flex justify-between">
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
       alt="Netflix Logo"
        className="w-60"/>
        {user && <div className='flex'>
          <img src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp' className='w-10 h-10  my-5'/>
        <button className='text-white font-bold' onClick={Handlesignout}>(Signout)</button>
        </div>}
      </div>
   
  )
}
export default Header
