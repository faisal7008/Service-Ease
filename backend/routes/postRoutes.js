const express = require("express");
const router = express.Router();
const { createPost, deletePost, getPost, getAllPosts, likePost, updatePost, getUserPosts, getLikedPosts } = require("../controllers/postController")
const { protect, leaderProtect, managerProtect } = require('../middlewares/authMiddleware')
const { uploadPosts } = require("../middlewares/uploadMiddleware") 

// http://localhost:9000/api/posts

router.post('/', uploadPosts.single("image"), createPost)
router.get('/', getAllPosts)
router.get('/:id', getPost)
router.get('/user/:userId', getUserPosts)
router.get('/likes/:userId', getLikedPosts)
router.put('/:id', uploadPosts.single("image"), updatePost)
router.delete("/:userId/:postId", protect, deletePost)
router.put("/:id/like", likePost)
// router.get("/:id/timeline", getTimelinePosts)

module.exports = router;