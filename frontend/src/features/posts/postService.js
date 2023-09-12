import axios from 'axios';

// const API_URL = 'https://worried-hare-sweatsuit.cyclic.app/api/posts/'
// const API_URL = 'http://localhost:9000/api/posts/'
const API_URL = `${process.env.REACT_APP_BACKEND_API}/posts/`;

// get all posts
const getAllPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

// get a post
const getPost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + postId, config);
  return response.data;
};

// get user posts
const getUserPosts = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + 'user/' + userId, config);
  return response.data;
};

// get liked posts
const getLikedPosts = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + 'likes/' + userId, config);
  return response.data;
};

// add new Post
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "multipart/form-data",
    },
  };
  // console.log(postData)
  const response = await axios.post(API_URL, postData, config);
  return response.data;
};

// update Post
const updatePost = async (postId, postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  };

  const response = await axios.put(API_URL + postId, postData, config);
  return response.data;
};

// delete Post
const deletePost = async (postId, userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + userId + '/' + postId, config);
  return response.data;
};

// like/unlike Post
const likePost = async (postId, postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + postId + '/like', postData, config);
  return response.data;
};

const postService = {
  getPost,
  getAllPosts,
  getUserPosts,
  getLikedPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
};

export default postService;
