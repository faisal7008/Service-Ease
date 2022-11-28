const express = require("express");
const router = express.Router();
const { createProject, updateProject, deleteProject, getProject, getProjects } = require('../controllers/projectController')
const { protect, leaderProtect, managerProtect } = require('../middlewares/authMiddleware')

// http://localhost:9000/api/projects

router.route('/').get(protect ,getProjects).post(managerProtect, createProject)
router.route('/:id').get(protect, getProject).put(managerProtect ,updateProject).delete(managerProtect, deleteProject)

module.exports = router;
