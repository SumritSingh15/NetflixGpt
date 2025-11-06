import React from 'react'
import { auth } from './utils/Firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser,removeUser } from './utils/UserSlice'
import { useEffect } from 'react'
import { Logo, UserIcon } from './utils/constant'

const Header = () => {
  const user = useSelector((store)=>store.user)
  const navigate = useNavigate();
const dispatch = useDispatch();


  const Handlesignout = ()=>{
    signOut(auth).then(() => {
  // Sign-out successful.

}).catch((error) => {
  // An error happened.
})
  }

useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
  
    const {uid,email,displayName} = user;
    // ...
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))

navigate("/browse")
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
   navigate("/")
  }
});
return ()=> unsubscribe();
},[])

  return (
      <div className="absolute px-8 py-2 bg-linear-to-b from-black to-transparent z-50 w-full flex justify-between">
        <img src={Logo}
        className="w-60"/>
        {user && <div className='flex'>
          <img src={UserIcon} className='w-10 h-10  my-5'/>
        <button className='text-white font-bold' onClick={Handlesignout}>(Signout)</button>
        </div>}
      </div>
   
  )
}
export default Header
