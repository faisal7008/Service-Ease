import axios from 'axios'

const API_URL = 'https://worried-hare-sweatsuit.cyclic.app/api/conversations/'

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

const createDM = async (data, token) => {
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

const deleteConversation = async (conversationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + "delete/" + conversationId, config)
  return response.data
}

const conversationService = {
  getDMs,
  getTeams,
  createTeam,
  createDM,
  deleteConversation
}

export default conversationService
