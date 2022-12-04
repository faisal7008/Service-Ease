const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add project name']
    },
    p_id: {
        type: String,
        required: [true, 'Please add project id'],
        unique: true
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