import axios from 'axios'

const API_URL = `${process.env.REACT_APP_BACKEND_API}/attachments/`
// const API_URL = 'http://localhost:9000/api/attachments/'

// get all Attachments
const getAttachments = async (issueId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + issueId, config)
  return response.data
}

// add new Attachment
const addAttachment = async (AttachmentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "multipart/form-data",
    },
  }

  const response = await axios.post(API_URL, AttachmentData, config)
  return response.data
}

// delete a Attachment
const deleteAttachment = async (AttachmentId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL + AttachmentId, config)
    return response.data
}

const attachmentService = {
  getAttachments,
  addAttachment,
  deleteAttachment
}

export default attachmentService
