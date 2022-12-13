const asyncHandler = require("express-async-handler");
const Survey = require("../models/Survey");
const Submission = require("../models/surveySubmission");


// @desc    Get Submisssions
// @route   GET /api/assignments
// @access  Private

const getSurveys = asyncHandler(async (req, res) => {
  const surveys = await Survey.find({ user: req.user.id });
  res.status(200).json(surveys);
});

// @desc    Get Submisssions
// @route   GET /api/assignments
// @access  Private

const getSubmissions = asyncHandler(async (req, res) => {
  const submissions = await surveySubmission.find({ user: req.user.id });
  res.status(200).json(submissions);
});

// @desc    Add Assigments by teacher
// @route   POST /api/assignments
// @access  Private

const addSurvey = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add survey name");
  }
  if (!req.body.questions) {
    res.status(400);
    throw new Error("Please add questions");
  }
  if (!req.body.expirydate) {
    res.status(400);
    throw new Error("Please add duedate");
  }
  //Check for user
  if(!req.user){
      res.status(401)
      throw new Error('User not found')
  }

  const survey = await Survey.create({
    name: req.body.name,
    questions: req.body.questions,
    expirydate: req.body.expirydate,
  });

  res.status(200).json(survey);
});

// @desc    Add Assigments by teacher
// @route   POST /api/assignments
// @access  Private

const addSubmission = asyncHandler(async (req, res) => {
  if (!req.body.surveyName) {
    res.status(400);
    throw new Error("Please add survey name");
  }
  if (!req.body.employeeId) {
    res.status(400);
    throw new Error("Please add your id");
  }
  if (!req.body.responses) {
    res.status(400);
    throw new Error("Please answer the questions");
  }

  //Check for user
  if(!req.user){
      res.status(401)
      throw new Error('User not found')
  }

  const submission = await surveySubmission.create({
    surveyName: req.body.surveyName,
    surveyId: req.body.surveyId,
    employeeId: req.body.employeeId,
    responses: req.body.responses,
  });

  res.status(200).json(submission);
});

module.exports = {
  getSurveys,
  addSurvey,
  getSubmissions,
  addSubmission,
};