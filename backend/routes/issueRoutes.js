const express = require("express");
const router = express.Router();
const { createIssue, updateIssue, deleteIssue, getIssue, getIssues, updateIssueAttachments } = require('../controllers/issueController')
const { protect } = require('../middlewares/authMiddleware');
const { uploadIssue } = require("../middlewares/uploadMiddleware");

// http://localhost:9000/api/issues

router.post('/', protect, createIssue)
router.get('/:projectId', protect, getIssues)
router.put('/updateAttachments/:id', protect, uploadIssue.single("attachments"), updateIssueAttachments)
router.route('/:id').get(protect, getIssue).put(protect, updateIssue).delete(protect, deleteIssue)

module.exports = router;
