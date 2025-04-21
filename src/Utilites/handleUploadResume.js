import CustomAxios from "./CustomAxios";

const handleUploadResume=async(resumeFile,setloading,setAnalyseData)=>{
    setloading(true);
    const formdata=new FormData();
    formdata.append('resume',resumeFile);
    try{
    const response=await CustomAxios.post('/api/resume/uploadfile',formdata,{
        headers:{
            "Content-Type": "multipart/form-data",
        }
    })
    console.log(response)
    if(response.status===200){
        setAnalyseData(response?.data?.Analyzeinfo)
    }
    }catch(err){
     console.log(err)
    }finally{
        setloading(false)
    }
}

export default handleUploadResume;