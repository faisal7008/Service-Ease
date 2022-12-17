const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add survey name"],
    },
    questions: {
      type: [{
        type: String,
        // unique: true
    }]
    },
    choices: {
      type: [{
        type: String
    }]
    },
    expirydate: {
      type: Date,
      required: [true, "Please add a due date"],
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Survey = mongoose.model("survey", SurveySchema);
