import axios from 'axios'

const API_URL = 'http://localhost:9000/api/projects/'

// get all projects
const getProjects = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)
  return response.data
}

// get a project
const getProject = async (projectId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL + projectId, config)
    return response.data
  }

// add new project
const createProject = async (projectData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, projectData, config)
  return response.data
}

// update a project
const updateProject = async (projectId, projectData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.put(API_URL + projectId, projectData, config)
    return response.data
}

// delete a project
const deleteProject = async (projectId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL + projectId, config)
    return response.data
}

const projectService = {
  getProjects,
  getProject,
  updateProject,
  createProject,
  deleteProject
}

export default projectService
