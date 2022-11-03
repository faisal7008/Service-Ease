const express = require("express");
const router = express.Router();
const { createConversation, getConversation, conversationBetweenUsers } = require('../controllers/conversationController')
const { protect, leaderProtect, managerProtect } = require('../middlewares/authMiddleware')

// http://localhost:9000/api/conversations

router.post('/', createConversation )
router.get('/:userId', getConversation )
router.get('/find/:firstUserId/:secondUserId', conversationBetweenUsers )

module.exports = router;
