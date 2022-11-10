const asyncHandler = require("express-async-handler");
const Survey = require("../models/Survey");
//const Submission = require("../models/Submissions");


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

// const getSubmissions = asyncHandler(async (req, res) => {
//   // await Assignment.findOne({_id: req.params.id})
//   await Assignment.find()
//     .populate({path:"submissions", select: {"name": 1, "rollno": 1, "answer": 1}})
//     .exec((err, assignment) => {
//       if(err){
//         return res.status(400).json(err)
//       } else {
//         return res.status(200).json(assignment)
//       }
//     })
// });

// @desc    Add Assigments by teacher
// @route   POST /api/assignments
// @access  Private

const addSurvey = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add survey name");
  }
  if (!req.body.type) {
    res.status(400);
    throw new Error("Please add type");
  }
  if (!req.body.expirydate) {
    res.status(400);
    throw new Error("Please add duedate");
  }
  // Check for user
  // if(!req.user){
  //     res.status(401)
  //     throw new Error('User not found')
  // }

  const survey = await Survey.create({
    name: req.body.name,
    type: req.body.type,
    expirydate: req.body.expirydate,
  });

  res.status(200).json(survey);
});


module.exports = {
  getSurveys,
  addSurvey,
};