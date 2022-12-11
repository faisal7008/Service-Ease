const express = require("express");
const router = express.Router();
const { createNotification, deleteNotification, getNotifications, viewedNotification, deleteNotifications } = require('../controllers/notificationController')
const { protect } = require('../middlewares/authMiddleware');

// http://localhost:9000/api/notifications

router.route('/:toUserId').get(protect ,getNotifications).delete(protect, deleteNotifications)
router.post('/', protect, createNotification)
router.route('/:id').put(protect, viewedNotification).delete(protect, deleteNotification)

module.exports = router;
