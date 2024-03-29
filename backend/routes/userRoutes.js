const express = require("express");
const router = express.Router();
const { registerUser, loginUser, updateUser, deleteUser, getMe, getOther, getManagers, getEmployees, follow, getAllUsers, signupUser } = require('../controllers/userController')
const { protect, leaderProtect, managerProtect } = require('../middlewares/authMiddleware')
const { uploadProfile } = require('../middlewares/uploadMiddleware')

// http://localhost:9000/api/users

router.route('/').post(uploadProfile.single('profilePicture'),leaderProtect, registerUser).get(protect, getAllUsers)
router.post('/signup', signupUser)
router.post('/login', loginUser )
router.get('/me', protect, getMe )
router.get('/managers', protect, getManagers)
router.get('/employees', protect, getEmployees)
router.route('/:id').delete(leaderProtect, deleteUser).put(uploadProfile.single('profilePicture'), updateUser).get(protect, getOther)
router.put('/follow/:id', protect, follow)

module.exports = router;
