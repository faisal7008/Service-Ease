import axios from 'axios'

// const API_URL = 'http://localhost:9000/api/users/'
// const API_URL = 'https://worried-hare-sweatsuit.cyclic.app/api/users/'
const API_URL = `${process.env.REACT_APP_BACKEND_API}/users/`

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    console.log(API_URL);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Update user
const updateUser = async (userData, token, id) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
    }
    const response = await axios.put(API_URL + id, userData, config)
    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    updateUser,
    login,
    logout,
}

export default authService