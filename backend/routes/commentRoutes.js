const express = require("express");
const router = express.Router();
const { createComment, updateComment, deleteComment, getComments } = require('../controllers/commentController')
const { protect } = require('../middlewares/authMiddleware');

// http://localhost:9000/api/comments

router.get('/:issueId', protect ,getComments)
router.post('/', protect, createComment)
router.route('/:id').put(protect,updateComment).delete(protect, deleteComment)

module.exports = router;
