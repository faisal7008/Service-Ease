const asyncHandler = require('express-async-handler')
const Attachment = require('../models/Attachment')

// @desc    add new attachment
// @route   POST /api/attachments
// @access  private

const addAttachment = asyncHandler( async (req, res) => {
    const {user_id, issue_id} = req.body

    const url = req.protocol + "://" + req.get("host");
    const file_path = url + "/uploads/issues/" + req.file.filename
    const file_type = req.file.mimetype
    const AttachmentData = await Attachment.create({
        user_id, issue_id, file_path, file_type
    })

    if(AttachmentData){
        res.status(201).json(AttachmentData)
    }
    else{
        res.status(400)
        throw new Error('Invalid Attachment')
    }
})

// @desc    get Attachments related to an issue
// @route   PUT /api/Attachments/:id
// @access  private

const getAttachments = asyncHandler(
    async (req, res) => {
        const Attachments = await Attachment.find({issue_id: req.params.issueId})
        if(Attachments){
            res.status(201).json(Attachments)
        }
        else{
            res.status(400).json("Attachments not found")
        }
    }
)

// @desc    Delete attachment
// @route   DELETE /api/attachments/:id
// @access  private

const deleteAttachment = asyncHandler(
    async (req, res) => {
        const Attachment = await Attachment.findById(req.params.id)

        // Check for user
        if(req.user.id !== req.body.user_id){
            res.status(401)
            throw new Error('Not Authorized')
        }

        if(!Attachment){
            res.status(400)
            throw new Error('Attachment not found')
        }

        await Attachment.remove()

        res.status(200).json({ id: req.params.id, creator: req.body.creator_id })
    }
)

module.exports = {
    addAttachment, deleteAttachment,  getAttachments
}