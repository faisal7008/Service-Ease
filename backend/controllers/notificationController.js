const asyncHandler = require('express-async-handler')
const Notification = require('../models/Notification')

// @desc    add new Notification
// @route   POST /api/notifications
// @access  private

const createNotification = asyncHandler( async (req, res) => {
    const {fromUser, toUser, message} = req.body

    const NotificationData = await Notification.create({
        fromUser, toUser, message
    })

    if(NotificationData){
        res.status(201).json(NotificationData)
    }
    else{
        res.status(400)
        throw new Error('Invalid Notification data')
    }
})

// @desc    get notifications related to an issue
// @route   PUT /api/notifications/:id
// @access  private

const getNotifications = asyncHandler(
    async (req, res) => {
        const notifications = await Notification.find({toUser: req.params.toUserId})
        if(notifications){
            res.status(201).json(notifications)
        }
        else{
            res.status(400).json("notifications not found")
        }
    }
)

// @desc    Update issue
// @route   PUT /api/issues/:id
// @access  private

const viewedNotification = asyncHandler(
    async (req, res) => {
        
        const notification = await Notification.findById(req.params.id)
        // Check for user
        if(req.user.id !== notification.toUser.toString()){
            // console.log(req.user.id)
            // console.log(notification.toUser)
            res.status(401)
            throw new Error('Not Authorized')
        }
        if(notification){
            await notification.updateOne({ $set : {viewed: true}})
            res.status(201).json({id: req.params.id})
        }
        else{
            res.status(400).json("Notification not found")
        }
    }
)

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  private

const deleteNotification = asyncHandler(
    async (req, res) => {
        const notification = await Notification.findById(req.params.id)

        // Check for user
        if(req.user.id !== notification.toUser.toString()){
            res.status(401)
            throw new Error('Not Authorized')
        }

        if(!notification){
            res.status(400)
            throw new Error('Notification not found')
        }

        await notification.remove()

        res.status(200).json({ id: req.params.id })
    }
)

const deleteNotifications = asyncHandler(
    async (req, res) => {
        const notifications = await Notification.deleteMany({toUser: req.params.toUserId})

        // Check for user
        if(req.user.id !== req.params.toUserId){
            res.status(401)
            throw new Error('Not Authorized')
        }

        if(!notifications){
            res.status(400)
            throw new Error('Notifications not found')
        }

        // await notifications.remove()

        res.status(200).json({ id: req.params.id })
    }
)

module.exports = {
    createNotification, viewedNotification, deleteNotification, deleteNotifications,  getNotifications
}