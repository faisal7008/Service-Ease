import axios from 'axios'

const API_URL = 'http://localhost:9000/api/conversations/'

// Add new user
const getConversations = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + userId, config)
  return response.data
}

const conversationService = {
  getConversations
}

export default conversationService
