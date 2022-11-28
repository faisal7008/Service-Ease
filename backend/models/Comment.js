const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    issue_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'issues'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    comment: {
        type: String
    }
    }, 
    {timestamps: true}
)

module.exports = Project = mongoose.model('comments', CommentSchema)