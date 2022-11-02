const express = require("express");
const router = express.Router();
const { registerUser, loginUser, updateUser, deleteUser, getMe, getManagers, getEmployees } = require('../controllers/userController')
const { protect, leaderProtect, managerProtect } = require('../middlewares/authMiddleware')

// http://localhost:9000/

router.post('/', registerUser )
router.post('/login', loginUser )
router.get('/me', protect, getMe )
router.get('/managers', leaderProtect, getManagers)
router.get('/employees', managerProtect, getEmployees)
router.route('/:id').delete(leaderProtect, deleteUser).put(protect, updateUser)

module.exports = router;
