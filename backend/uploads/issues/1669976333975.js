const mongoose = require('mongoose')

const IssueSchema = new mongoose.Schema({
    project_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
        ref: 'projects'
    },
    creator_id: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
        ref: 'users'
    },
    assignee_id: {
        type: String,
        required: [true, 'Please add assignee id']
    },
    priority: {
        type: String,
        required: [true, 'Pleade add priority value']
    },
    summary: {
        type: String,
        required: [true, 'Please add project summary']
    },
    description: {
        type: String,
        required: [true, 'Please addd project description']
    },
    status: {
        type: String,
        required: [true, 'Please add project status']
    }},
    {timestamps: true}
);

module.exports = Issue = mongoose.model('issues',IssueSchema)