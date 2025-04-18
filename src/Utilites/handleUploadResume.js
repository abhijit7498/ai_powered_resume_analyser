import CustomAxios from "./CustomAxios";

const handleUploadResume=async(resumeFile)=>{

    const formdata=new FormData();
    formdata.append('resume',resumeFile);
    try{
    const response=await CustomAxios.post('/api/uploadresume/uploadfile',formdata,{
        headers:{
            "Content-Type": "multipart/form-data",
        }
    })
    console.log(response)
    if(response.status===201){
        alert("file Save Successfully");
    }
    }catch(err){
     console.log(err)
    }
}

export default handleUploadResume;