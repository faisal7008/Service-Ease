const express = require("express");
const router = express.Router();
const { addAttachment, deleteAttachment, getAttachments } = require('../controllers/attachmentController')
const { protect } = require('../middlewares/authMiddleware');
const { uploadIssue } = require('../middlewares/uploadMiddleware')

// http://localhost:9000/api/attachments

router.get('/:issueId', protect ,getAttachments)
router.post('/', uploadIssue.single("attachments"), addAttachment)
router.delete('/:id', protect, deleteAttachment)

module.exports = router;
