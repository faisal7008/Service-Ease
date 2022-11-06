import axios from 'axios'

const API_URL = 'http://localhost:9000/api/conversations/'

const getDMs = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + "dms/" + userId, config)
  return response.data
}

const getTeams = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + "teams/" + userId, config)
  return response.data
}

const createConversation = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + "dms", data, config)
  return response.data
}

const createTeam = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + "teams", data, config)
  return response.data
}

const conversationService = {
  getDMs,
  getTeams,
  createTeam,
  createConversation
}

export default conversationService
