import axios from 'axios'

const API_URL = 'http://localhost:9000/api/users/'

// Add new user
const addUser = async (UserData) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }

  const response = await axios.post(API_URL, UserData)

  return response.data
}

// get user
const getUser = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + userId, config)

  return response.data
}

// Get all managers
const getManagers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'managers', config)

  return response.data
}

// Get all employees
const getEmployees = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'employees', config)

  return response.data
}

// Delete user
const deleteUser = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + userId, config)

  return response.data
}

const userService = {
  addUser,
  getUser,
  getEmployees,
  getManagers,
  deleteUser,
}

export default userService
