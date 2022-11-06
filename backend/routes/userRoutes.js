const express = require("express");
const router = express.Router();
const { registerUser, loginUser, updateUser, deleteUser, getMe, getOther, getManagers, getEmployees } = require('../controllers/userController')
const { protect, leaderProtect, managerProtect } = require('../middlewares/authMiddleware')

// http://localhost:9000/api/users

router.post('/', registerUser )
router.post('/login', loginUser )
router.get('/me', protect, getMe )
router.get('/managers', protect, getManagers)
router.get('/employees', protect, getEmployees)
router.route('/:id').delete(leaderProtect, deleteUser).put(protect, updateUser).get(protect, getOther)

module.exports = router;
