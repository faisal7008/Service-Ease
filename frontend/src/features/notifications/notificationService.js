import axios from 'axios'

// const API_URL = 'http://localhost:9000/api/notifications/'
const API_URL = `${process.env.REACT_APP_BACKEND_API}/notifications/`

// get all notifications
const getNotifications = async (toUserId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + toUserId, config)
  return response.data
}

// add new notification
const createNotification = async (notificationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, notificationData, config)
  return response.data
}

// update a notification
const viewedNotification = async (notificationId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.put(API_URL + notificationId, {}, config)
    return response.data
}

// delete a notification
const deleteNotification = async (notificationId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL + notificationId, config)
    return response.data
}

// delete all notification
const deleteNotifications = async (toUserId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + toUserId, config)
  return response.data
}

const notificationService = {
  getNotifications,
  viewedNotification,
  createNotification,
  deleteNotification,
  deleteNotifications
}

export default notificationService
