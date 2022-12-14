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
  .get(leaderProtect, getSurveys)
  .post(leaderProtect, addSurvey);

router
  .route("/:id")
  .put(leaderProtect, editSurvey)
  .delete(leaderProtect, removeSurvey);

router
  .route("/submit")
  .get(protect, getSubmissions)
  .post(protect, addSubmission);


module.exports = router;