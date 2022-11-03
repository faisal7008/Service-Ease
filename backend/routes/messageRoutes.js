const express = require("express");
const router = express.Router();
const { getMessage, postMessage } = require('../controllers/messageController')
const { protect, leaderProtect, managerProtect } = require('../middlewares/authMiddleware')

// http://localhost:9000/api/messages

router.post('/', postMessage )
router.get('/:conversationId', getMessage )

module.exports = router;
