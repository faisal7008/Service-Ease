const mongoose = require('mongoose')

const AttachmentSchema = new mongoose.Schema({
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
    file_path: {
        type: String,
        required: true
    },
    file_type: {
        type: String,
        required: true
    }
    }, 
    {timestamps: true}
)

module.exports = Attachment = mongoose.model('attachments', AttachmentSchema)