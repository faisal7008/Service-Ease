import axios from 'axios'

const API_URL = 'http://localhost:9000/api/announcements/'

// get all Announcements
const getAllAnnouncements = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)
  return response.data
}

// get a Announcement
const getAnnouncement = async (AnnouncementId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + AnnouncementId, config)
  return response.data
}

// add new Announcement
const createAnnouncement = async (AnnouncementData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  }
  console.log(AnnouncementData)
  const response = await axios.post(API_URL, AnnouncementData, config)
  return response.data
}

// update Announcement
const updateAnnouncement = async (AnnouncementId, AnnouncementData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  
    const response = await axios.put(API_URL + AnnouncementId, AnnouncementData, config)
    return response.data
}

// delete Announcement
const deleteAnnouncement = async (AnnouncementId, userId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,

      },
    }
  
    const response = await axios.delete(API_URL + userId + "/" + AnnouncementId, config)
    return response.data
}

// like/unlike Announcement
const likeAnnouncement = async (AnnouncementId, AnnouncementData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.put(API_URL + AnnouncementId + "/like", AnnouncementData, config)
    return response.data
}

const announcementService = {
  getAnnouncement,
  getAllAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  likeAnnouncement
}

export default announcementService
