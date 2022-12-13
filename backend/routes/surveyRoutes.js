const express = require("express");
const router = express.Router();
const {
  getSurveys,
  addSurvey,
  getSubmissions,
  addSubmission,
} = require("../controllers/surveyController");
const { protect } = require("../middlewares/authMiddleware");


router
  .route("/")
  .get(protect, getSurveys)
  .post(protect, addSurvey);

router
  .route("/submit")
  .get(protect, getSubmissions)
  .post(protect, addSubmission)


module.exports = router;