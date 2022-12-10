const express = require("express");
const router = express.Router();
const { createIssue, updateIssue, deleteIssue, getIssue, getIssues, updateIssueAttachments, getAllIssues } = require('../controllers/issueController')
const { protect } = require('../middlewares/authMiddleware');
const { uploadIssue } = require("../middlewares/uploadMiddleware");

// http://localhost:9000/api/issues

router.route('/').post(protect, createIssue).get(protect, getAllIssues)
router.get('/:projectId', protect, getIssues)
router.put('/updateAttachments/:id', protect, uploadIssue.single("attachments"), updateIssueAttachments)
router.route('/:id').get(protect, getIssue).put(protect, updateIssue).delete(protect, deleteIssue)

module.exports = router;
