import axios from 'axios'

// const API_URL = 'https://worried-hare-sweatsuit.cyclic.app/api/comments/'
// const API_URL = 'http://localhost:9000/api/comments/'
const API_URL = `${process.env.REACT_APP_BACKEND_API}/comments/`

// get all Comments
const getComments = async (issueId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + issueId, config)
  return response.data
}

// get a Comment
const getComment = async (CommentId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL + CommentId, config)
    return response.data
  }

// add new Comment
const createComment = async (CommentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, CommentData, config)
  return response.data
}

// update a Comment
const updateComment = async (CommentId, CommentData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.put(API_URL + CommentId, CommentData, config)
    return response.data
}

// delete a Comment
const deleteComment = async (CommentId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL + CommentId, config)
    return response.data
}

const commentService = {
  getComments,
  getComment,
  updateComment,
  createComment,
  deleteComment
}

export default commentService
