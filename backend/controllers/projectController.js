const asyncHandler = require('express-async-handler')
const Project = require('../models/Project')

// @desc    create new project
// @route   POST /api/projects
// @access  Manager

const createProject = asyncHandler( async (req, res) => {
    const {name, key, members, admins} = req.body

    const project = await Project.create({
        name, key, members, admins
    })

    if(project){
        res.status(201).json(project)
    }
    else{
        res.status(400)
        throw new Error('Invalid project data')
    }
})

// @desc    get all projects
// @route   POST /api/projects
// @access  Manager

const getProjects = asyncHandler( async (req, res) => {

    const projects = await Project.find()

    if(projects){
        res.status(201).json(projects)
    }
    else{
        res.status(400)
        throw new Error('Not found')
    }
})

// @desc    get a project
// @route   PUT /api/projects/:id
// @access  Manager

const getProject = asyncHandler(
    async (req, res) => {
        const project = await Project.findById(req.params.id)
        if(project){
            res.status(201).json(project)
        }
        else{
            res.status(400).json("Project not found")
        }
    }
)

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Manager

const updateProject = asyncHandler(
    async (req, res) => {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        if(updatedProject){
            res.status(201).json(updatedProject)
        }
        else{
            res.status(400).json("Project not found")
        }
    }
)

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Manager

const deleteProject = asyncHandler(
    async (req, res) => {
        const project = await Project.findById(req.params.id)

        // Check for user
        if(!req.user){
            res.status(401)
            throw new Error('Not Authorized')
        }

        if(!project){
            res.status(400)
            throw new Error('User not found')
        }

        await project.remove()

        res.status(200).json({ id: req.params.id })
    }
)

module.exports = {
    createProject, updateProject, deleteProject,  getProject, getProjects
}