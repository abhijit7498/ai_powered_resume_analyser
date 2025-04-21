import { createContext, useContext, useState ,useEffect} from "react";

const AuthContext=createContext();
export const useAuth =()=>useContext(AuthContext)

export const AuthProvider=({children})=>{
const [UserCredentials, setUserCredentials] = useState(null);
const [loading, setloading] = useState(true)

useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if(storedUser){
        setUserCredentials(JSON.parse(storedUser))
    }
    setloading(false)
}, [])

const login = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    setUserCredentials(userData);
  };
console.log(UserCredentials)
  const logout = () => {
    localStorage.removeItem("userData");
    setUserCredentials(null);
  };
console.log(UserCredentials)
    return(
        <AuthContext.Provider value={{UserCredentials,loading,login,logout}}>
            {children}
        </AuthContext.Provider>

        
    )

}