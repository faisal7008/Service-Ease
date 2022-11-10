const express = require("express");
const router = express.Router();
const {
  getSurveys,
  addSurvey,
} = require("../controllers/surveyController");
const { protect } = require("../middlewares/authMiddleware");


router
  .route("/")
  .get(protect, getSurveys)
  .post(protect, addSurvey);


module.exports = router;