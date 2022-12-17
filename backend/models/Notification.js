const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    toUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    message: {
        type: String,
        required: true
    },
    viewed: {
        type: Boolean,
        default: false
    }
    }, 
    {timestamps: true}
)

module.exports = mongoose.model('notification', NotificationSchema)