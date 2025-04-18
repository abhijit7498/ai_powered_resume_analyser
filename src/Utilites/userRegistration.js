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
        console.log(response)
    }catch(err){
            console.log(err)
    }
}
export default userRegistration;