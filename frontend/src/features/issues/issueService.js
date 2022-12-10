import axios from 'axios'

const API_URL = 'http://localhost:9000/api/issues/'

// get all Issues related to a project
const getIssues = async (projectId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + projectId, config)
  return response.data
}

// get all issues
const getAllIssues = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

// get a Issue
const getIssue = async (IssueId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL + IssueId, config)
    return response.data
  }

// add new Issue
const createIssue = async (IssueData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "multipart/form-data",
    },
  }
  console.log(IssueData);
  const response = await axios.post(API_URL, IssueData, config)
  return response.data
}

// update a Issue
const updateIssue = async (IssueId, IssueData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    // console.log(IssueData)
    const response = await axios.put(API_URL + IssueId, IssueData, config)
    return response.data
}

// update a Issue
const updateIssueAttachments = async (IssueId, IssueData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  }
  // console.log(IssueData)
  const response = await axios.put(API_URL + "updateAttachments/" + IssueId, IssueData, config)
  return response.data
}

// delete a Issue
const deleteIssue = async (IssueId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL + IssueId, config)
    return response.data
}

const issueService = {
  getIssues,
  getAllIssues,
  getIssue,
  updateIssueAttachments,
  updateIssue,
  createIssue,
  deleteIssue
}

export default issueService
