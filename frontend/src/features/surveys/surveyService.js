import axios from 'axios'

const API_URL = 'http://localhost:9000/api/surveys/'

// get all Surveys
const getSurveys = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)
  return response.data
}

// get all submissions
const getSubmissions = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'submit', config)
  return response.data
}

// get a Survey
const getSurvey = async (SurveyId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL + SurveyId, config)
    return response.data
  }

// add new Survey
const createSurvey = async (SurveyData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, SurveyData, config)
  return response.data
}


// add new submission
const addSubmission = async (SurveyData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + 'submit', SurveyData, config)
  return response.data
}

// update a Survey
const updateSurvey = async (SurveyId, SurveyData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.put(API_URL + SurveyId, SurveyData, config)
    return response.data
}

// delete a Survey
const deleteSurvey = async (SurveyId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL + SurveyId, config)
    return response.data
}



const surveyService = {
  getSurveys,
  getSurvey,
  getSubmissions,
  addSubmission,
  updateSurvey,
  createSurvey,
  deleteSurvey
}

export default surveyService
