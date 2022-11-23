const express = require("express");
const router = express.Router();
const { conversationBetweenUsers, createTeam, createDM, getDMs, getTeams, deleteConversation } = require('../controllers/conversationController')
const { protect, leaderProtect, managerProtect } = require('../middlewares/authMiddleware')

// http://localhost:9000/api/conversations

router.post('/dms', createDM )
router.post('/teams', createTeam )
router.get('/dms/:userId', getDMs )
router.get('/teams/:userId', getTeams )
router.get('/find/:firstUserId/:secondUserId', conversationBetweenUsers )
router.delete('/delete/:conversationId', deleteConversation )

module.exports = router;
