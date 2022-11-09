const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add your name']
  },
  id_no: {
    type: String,
    required: [true, 'Please add your id no']
  },
  ans1: {
    type: String,
    required: [true, "This is a required question"]
  },
  ans2: {
    type: String,
    required: [true, "This is a required question"]
  },
  ans3: {
    type: String,
    required: [true, "This is a required question"]
  },
  ans4: {
    type: String,
    required: [true, "This is a required question"]
  },
  ans5: {
    type: String,
    required: [true, "This is a required question"]
  },
  ans6: {
    type: String,
    required: [true, "This is a required question"]
  },
  ans7: {
    type: String,
    required: [true, "This is a required question"]
  },
  ans8: {
    type: String,
    required: [true, "This is a required question"]
  },
  rating: {
    type: String,
    required: [true, "This is a required question"]
  },
  desc1: {
    type: String,
    required: [true, "This is a required question"]
  },
  desc2: {
    type: String,
    required: [true, "This is a required question"]
  },
  desc3: {
    type: String,
    required: [true, "This is a required question"]
  }
}, 
{
  timestamps: true
}
);

module.exports = surveySubmission = mongoose.model('submission', SubmissionSchema);