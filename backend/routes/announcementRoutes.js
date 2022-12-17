const express = require("express");
const router = express.Router();
const { createAnnouncement, deleteAnnouncement, getAnnouncement, getAllAnnouncements, likeAnnouncement, updateAnnouncement } = require("../controllers/announcementController")
const { protect, leaderProtect, managerProtect } = require('../middlewares/authMiddleware')
const { uploadPosts } = require("../middlewares/uploadMiddleware") 

// http://localhost:9000/api/Announcements

router.post('/', uploadPosts.single("image"), leaderProtect, createAnnouncement)
router.get('/', protect, getAllAnnouncements)
router.get('/:id', protect, getAnnouncement)
router.put('/:id', uploadPosts.single("image"), leaderProtect, updateAnnouncement)
router.delete("/:userId/:announcementId", leaderProtect, deleteAnnouncement)
router.put("/:id/like", protect, likeAnnouncement)

module.exports = router;