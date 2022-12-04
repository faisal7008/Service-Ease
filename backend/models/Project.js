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
    createdBy: {
        type: String,
        required: [true, 'Please add the creator of this project'],
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