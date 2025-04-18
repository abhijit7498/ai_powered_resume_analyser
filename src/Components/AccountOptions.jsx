import React from 'react'
import { useAuth } from '../../Redux/AuthContext'
import { Link } from 'react-router-dom';

const AccountOptions = () => {
    const {UserCredentials,logout}= useAuth();
  return (
<div className='absolute right-0 mt-4 bg-transparent rounded-md w-44 flex flex-col justify-center items-center px-3 gap-3 text-black'>
    {
        !UserCredentials?<>
        <div className='w-full h-9 flex justify-center items-center cursor-pointer bg-white rounded-md'>
                Login
            </div>
            <div className='w-full h-9 flex justify-center cursor-pointer items-center bg-white rounded-md'>
                Signup
            </div>
            </>:<>
            <Link to='/ProfilePage' className='w-full h-9 flex justify-center cursor-pointer items-center bg-white rounded-md'><div>
                Profile
            </div></Link>
             <div onClick={()=>logout()} className='w-full h-9 flex justify-center cursor-pointer items-center bg-white rounded-md'>
             Logout
         </div>
         </>
}</div> 
     )
}

export default AccountOptions