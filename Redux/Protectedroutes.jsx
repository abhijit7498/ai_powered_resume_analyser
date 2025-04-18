import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate} from 'react-router-dom';
const Protectedroutes = ({children}) => {
    const {loading,UserCredentials}=useAuth();
    if(loading) return <div>Loading...</div>
  return UserCredentials?children:<Navigate to='/Login'/>
  
}

export default Protectedroutes