const express = require("express");
const router = express.Router();
const {
  getSurveys,
  addSurvey,
  editSurvey,
  removeSurvey,
  getSubmissions,
  addSubmission,
} = require("../controllers/surveyController");
const { protect, leaderProtect } = require("../middlewares/authMiddleware");


router
  .route("/")
  .get(protect, getSurveys)
  .post(protect, addSurvey);

router
  .route("/:id")
  .put(protect, editSurvey)
  .delete(protect, removeSurvey);

router
  .route("/submit")
  .get(protect, getSubmissions)
  .post(protect, addSubmission);

module.exports = router;