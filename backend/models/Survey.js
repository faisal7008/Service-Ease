const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add survey name"],
    },
    type: {
      type: String,
      required: [true, "Please select type"],
    },
    expirydate: {
      type: Date,
      required: [true, "Please add a due date"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Survey = mongoose.model("survey", SurveySchema);
