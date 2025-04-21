import { toast } from "react-toastify";
import CustomAxios from "./CustomAxios";

const userRegistration=async(e, formData)=>{
    e.preventDefault();
    try{
        const response= await CustomAxios.post('/api/authentication/signUp',formData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
                
            }
        )
        if(response.status===201){
                toast.success("User Created Successfully")
        }else if(response.status===400){
            toast.info("User Already Exist")
        }

    }catch(error){
         if (error.response) {
                    const message = error.response.data.message;
        
                    if (message === "All Fields Are Required") {
                        toast.error("All Fields Are Required");
                    } else if (message === "User Already Exist") {
                        toast.error("User Already Exist");
                    }
                    console.log("Error Response:", error.response);
                } else {
                    toast.error("Network error or server is down.");
                    console.log("Unknown Error:", error);
                    console.log(error)
                }
    }
}
export default userRegistration;