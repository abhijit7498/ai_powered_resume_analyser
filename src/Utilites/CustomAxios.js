import axios from "axios";

// const BaseUrl="http://localhost:3000";
const BaseUrl="https://ai-powered-resume-analyser-server.onrender.com"

const userData=localStorage.getItem('userData');
const userCredentials= userData?JSON.parse(userData):null;
const headers = {
    'Content-Type': 'application/json',
    ...(userCredentials?.token && { 'Authorization': `Bearer ${userCredentials.token}` })
  };
  
const CustomAxios=axios.create({
    baseURL:BaseUrl,
    headers
})

export default CustomAxios;