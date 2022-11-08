import axios from "axios";

const API_URL = "http://localhost:9000/api/surveys/";

// Create new Survey
const addSurvey = async (surveyData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await axios.post(API_URL, surveyData, config);

  return response.data;
};

// Get all Surveys
const getSurveys = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete Assignment
// const deleteAssignment = async (AssignmentId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.delete(API_URL + AssignmentId, config);

//   return response.data;
// };

const surveyService = {
  addSurvey,
  getSurveys,
  //deletesurvey,
};

export default surveyService;
