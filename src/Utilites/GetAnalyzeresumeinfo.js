import { toast } from "react-toastify";
import CustomAxios from "./CustomAxios";

const GetAnalyzereumeinfo=async(id,setloading,setAnalyseData)=>{
    try{
        console.log(id)
    setloading(true);
    const response=await CustomAxios.get(`/api/resume/analyseinfo/${id}`);
    console.log(response)
    if(response.status===200){
        setAnalyseData(response?.data?.Analyzeinfo)
    }
    }catch(err){
     console.log(err)
     toast.error("Someting Went Wrong ! Please Try Later")
    }finally{
        setloading(false)
    }
}

export default GetAnalyzereumeinfo;