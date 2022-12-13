const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  surveyName: {
    type: String,
    required: [true, "Please add survey name"],
  },
  surveyId: {
    type: String,
  },
  employeeId: {
    type: String,
  },
  responses: {
    type: [{
      question: {
        type: String
      },
      answer: {
        type: String,
        required: [true, "Required field"]
      }
    }]
  }
},
  {
    timestamps: true
  }
);

module.exports = surveySubmission = mongoose.model('submission', SubmissionSchema);