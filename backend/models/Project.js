const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add project name']
    },
    key: {
        type: String,
        required: [true, 'Please add project key'],
        unique: true
    },
    desc: {
        type: String,
        required: [true, 'Please add project description']
    },
    members: {
        type: [{ 
            type: String,
            unique: true
        }]
    },
    admins: {
        type: [{
            type: String,
            unique: true
        }]
    }
    }
)

module.exports = Project = mongoose.model('projects',ProjectSchema)