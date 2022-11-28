const asyncHandler = require('express-async-handler')
const Issue = require('../models/Issue')

// @desc    create new issue
// @route   POST /api/issues
// @access  private

const createIssue = asyncHandler( async (req, res) => {
    const {project_id, creator_id, assignee_id, priority, summary, description, status, duedate} = req.body
    // const url = req.protocol + "://" + req.get("host");
    // attachments = url + "/uploads/issues/" + req.file.filename

    const issue = await Issue.create({
        project_id, creator_id, assignee_id, priority, summary, description, status, duedate
    })

    if(issue){
        res.status(201).json(issue)
    }
    else{
        res.status(400)
        throw new Error('Invalid project data')
    }
})

// @desc    get all issues
// @route   POST /api/issues
// @access  private

const getIssues = asyncHandler( async (req, res) => {
    const {projectId} = req.params
    const issues = await Issue.find({project_id: projectId})

    if(issues){
        res.status(201).json(issues)
    }
    else{
        res.status(400)
        throw new Error('Not found')
    }
})

// @desc    get an issue
// @route   PUT /api/issues/:id
// @access  private

const getIssue = asyncHandler(
    async (req, res) => {
        const issue = await Issue.findById(req.params.id)
        if(issue){
            res.status(201).json(issue)
        }
        else{
            res.status(400).json("Issue not found")
        }
    }
)

// @desc    Update issue
// @route   PUT /api/issues/:id
// @access  private

const updateIssue = asyncHandler(
    async (req, res) => {
        const url = req.protocol + "://" + req.get("host");
        // const attachments = []
        // for(let file in req.files){
        //     attachments.push()
        // }
        req.body.attachments = url + "/uploads/issues/" + req.file.filename
        const issue = await Issue.findById(req.params.id)
        if(issue){
            await issue.updateOne({$push : {attachments: req.body.attachments}})
            res.status(201).json(issue)
        }
        else{
            res.status(400).json("Issue not found")
        }
    }
)

// @desc    Delete issue
// @route   DELETE /api/issues/:id
// @access  private

const deleteIssue = asyncHandler(
    async (req, res) => {
        const issue = await Issue.findById(req.params.id)

        // Check for user
        if(req.user.id !== req.body.creator_id){
            res.status(401)
            throw new Error('Not Authorized')
        }

        if(!issue){
            res.status(400)
            throw new Error('User not found')
        }

        await issue.remove()

        res.status(200).json({ id: req.params.id, creator: req.body.creator_id })
    }
)

module.exports = {
    createIssue, updateIssue, deleteIssue,  getIssue, getIssues
}