import axios from 'axios';

// const API_URL = 'http://localhost:9000/api/messages/'
// const API_URL = 'https://worried-hare-sweatsuit.cyclic.app/api/messages/'
const API_URL = `${process.env.REACT_APP_BACKEND_API}/messages/`;

// get all messages
const getMessages = async (conversationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + conversationId, config);
  return response.data;
};

// add new message
const postMessage = async (msgData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, msgData, config);
  return response.data;
};

const messageService = {
  getMessages,
  postMessage,
};

export default messageService;
