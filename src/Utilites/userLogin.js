import CustomAxios from "./CustomAxios";

const userLogin = async (e, formData, login, navigate) => {
    e.preventDefault();
    try {
        const response = await CustomAxios.post('/api/authentication/login', formData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        if (response.status == 201) {
            login(response.data)
            navigate('/')
        }
    } catch (error) {
        console.log(error)

    }
}

export default userLogin;