const mongoose = require('mongoose')

const IssueSchema = new mongoose.Schema({
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'projects'
    },
    creator_id: {
        type: mongoose.Schema.Types.ObjectId,
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
    attachments: {
        type: Array,
        default: []
    },
    status: {
        type: String,
        required: [true, 'Please add project status']
    },
    duedate: {
        type: String,
        required: [true, 'Please add due date']
    }},
    {timestamps: true}
);

module.exports = Issue = mongoose.model('issues', IssueSchema)