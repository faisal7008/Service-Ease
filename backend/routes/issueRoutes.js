const express = require("express");
const router = express.Router();
const { createIssue, updateIssue, deleteIssue, getIssue, getIssues } = require('../controllers/issueController')
const { protect } = require('../middlewares/authMiddleware');
const { uploadIssue } = require("../middlewares/uploadMiddleware");

// http://localhost:9000/api/issues

router.post('/', protect, createIssue)
router.get('/:projectId', protect, getIssues)
router.route('/:id').get(protect, getIssue).put(uploadIssue.single("attachments"),updateIssue).delete(protect, deleteIssue)

module.exports = router;
