const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  username: {
    type: String,
    // required: true, 'Please add a username'],
    min: 3,
    max: 20,
    unique: true,
  },
  id_no: {
    type: String,
    required: [true, 'Please add ID number'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Please add a email'],
    max: 50,
    unique: true
  },
  role: {
    type: String,
    required: [true, 'Please specify a role']
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [],
  },
  desc: {
    type: String,
    max: 50,
  },
  location: {
    type: String,
    max: 50,
  },
}, 
{
  timestamps: true
});

module.exports = User = mongoose.model('user', UserSchema);