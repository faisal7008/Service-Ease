const asyncHandler = require('express-async-handler')
const Comment = require('../models/Comment')

// @desc    add new comment
// @route   POST /api/comments
// @access  private

const createComment = asyncHandler( async (req, res) => {
    const {user_id, issue_id, comment} = req.body

    const commentData = await Comment.create({
        user_id, issue_id, comment
    })

    if(commentData){
        res.status(201).json(commentData)
    }
    else{
        res.status(400)
        throw new Error('Invalid comment')
    }
})

// @desc    get comments related to an issue
// @route   PUT /api/comments/:id
// @access  private

const getComments = asyncHandler(
    async (req, res) => {
        const comments = await Comment.find({issue_id: req.params.issueId})
        if(comments){
            res.status(201).json(comments)
        }
        else{
            res.status(400).json("comments not found")
        }
    }
)

// @desc    Update issue
// @route   PUT /api/issues/:id
// @access  private

const updateComment = asyncHandler(
    async (req, res) => {
        // Check for user
        if(req.user.id !== req.body.user_id){
            res.status(401)
            throw new Error('Not Authorized')
        }
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(comment){
            res.status(201).json(comment)
        }
        else{
            res.status(400).json("Comment not found")
        }
    }
)

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  private

const deleteComment = asyncHandler(
    async (req, res) => {
        const comment = await Comment.findById(req.params.id)

        // Check for user
        if(req.user.id !== req.body.user_id){
            res.status(401)
            throw new Error('Not Authorized')
        }

        if(!comment){
            res.status(400)
            throw new Error('Comment not found')
        }

        await comment.remove()

        res.status(200).json({ id: req.params.id, creator: req.body.creator_id })
    }
)

module.exports = {
    createComment, updateComment, deleteComment,  getComments
}