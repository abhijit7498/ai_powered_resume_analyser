import axios from "axios";

// const BaseUrl = "http://localhost:3000";
const BaseUrl="https://ai-powered-resume-analyser-server.onrender.com"

const CustomAxios = axios.create({
  baseURL: BaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

CustomAxios.interceptors.request.use((config) => {
  const userData = localStorage.getItem("userData");
  const userCredentials = userData ? JSON.parse(userData) : null;

  if (userCredentials?.token) {
    config.headers.Authorization = `Bearer ${userCredentials.token}`;
  }
  return config;
});

export default CustomAxios;
