const asyncHandler = require("express-async-handler");
const Survey = require("../models/Survey");
const Submission = require("../models/surveySubmission");


// @desc    Get Surveys
// @route   GET /api/surveys
// @access  Private

const getSurveys = asyncHandler(async (req, res) => {
  const surveys = await Survey.find();
  res.status(200).json(surveys);
});

// @desc    Add Surveys by leader
// @route   POST /api/surveys
// @access  Private

const addSurvey = asyncHandler(
  async (req, res) => {
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
    // if(!req.user){
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    const survey = await Survey.create({
      name: req.body.name,
      questions: req.body.questions,
      expirydate: req.body.expirydate,
    });

    res.status(200).json(survey);
});

// @desc    Edit Surveys by leader
// @route   PUT /api/surveys/:id
// @access  Private

const editSurvey = asyncHandler(
  async (req, res) => {
    const survey = await Survey.findById(req.params.id)
    if(!survey) {
      res.status(400)
      throw new Error('Survey not found')
    }

  //Check for user
  if(!req.user){
      res.status(401)
      throw new Error('User not found')
  }

  const updatedSurvey = await Survey.findByIdAndUpdate(
    req.params.id, req.body, {
        new: true
    })

  res.status(200).json(updatedSurvey);
});

// @desc    Delete Surveys by leader
// @route   DELETE /api/surveys/:id
// @access  Private

const removeSurvey = asyncHandler(
  async (req, res) => {
    const survey = await Survey.findById(req.params.id)
    if(!survey) {
      res.status(400)
      throw new Error('Survey not found')
    }
  //Check for user
  if(!req.user){
      res.status(401)
      throw new Error('User not found')
  }

  await survey.remove()

  res.status(200).json({id: req.params.id});
});

//Submission Controller

// @desc    Get Submisssions
// @route   GET /api/surveys/submit
// @access  Private

const getSubmissions = asyncHandler(async (req, res) => {
  const submissions = await Submission.find();
  res.status(200).json(submissions);
});


// @desc    Add Submissions by employee
// @route   POST /api/surveys/submit
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
  // if(!req.user){
  //     res.status(401)
  //     throw new Error('User not found')
  // }

  const submission = await Submission.create({
    surveyName: req.body.surveyName,
    surveyId: req.body.surveyId,
    employeeId: req.body.employeeId,
    responses: req.body.responses,
  });

  await Survey.findByIdAndUpdate(submission.surveyId, {$push: {submissions: submission.employeeId}})

  res.status(200).json(submission);
});

module.exports = {
  getSurveys,
  addSurvey,
  editSurvey,
  removeSurvey,
  getSubmissions,
  addSubmission,
};