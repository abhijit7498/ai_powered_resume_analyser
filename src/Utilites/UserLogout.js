import { useNavigate } from "react-router-dom";

export const logout=()=>{
    const navigation=useNavigate();

        localStorage.removeItem("userData");
        // setUserCredentials(null);
        return navigation('/login')
      
}