import CustomAxios from "./CustomAxios"
const FetchUserProfile=async(UserCredentials,setuserData)=>{
    console.log(UserCredentials?.user?._id)
    try {
        const response=await CustomAxios.get(`/api/user/profile/${UserCredentials?.user?._id}`)
        if(response.status===200){
            setuserData(response?.data)
        }
    } catch (error) {
        console.log(error)
    }
}

export default FetchUserProfile;