import { toast } from "react-toastify";
import CustomAxios from "./CustomAxios";

const userLogin = async (e, formData, login, navigate,setloading) => {
    e.preventDefault();
    try {
        setloading(true)
        const response = await CustomAxios.post('/api/authentication/login', formData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        if (response.status == 201) {
            login(response.data)
            setloading(false)
            navigate('/')
        }
    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;

            if (message === "User Not Found") {
                toast.error("User not found. Please check your email.");
            } else if (message === "Invalid Password") {
                toast.error("Incorrect password. Please try again.");
            } else if (message === "All Fields Are Required") {
                toast.warn("Please fill in all fields.");
            } else {
                toast.error("Login failed. Please try again.");
            }

            console.log("Error Response:", error.response);
        } else {
            toast.error("Network error or server is down.");
            console.log("Unknown Error:", error);
        }    }finally{
        setloading(false)
    }
}

export default userLogin;