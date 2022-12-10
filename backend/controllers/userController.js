const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')

// @desc    Register new user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler( async (req, res) => {
    const {name, id_no, username, email, role, password} = req.body
    if(!name || !id_no || !email || !role || !password){
        res.status(400)
        throw new Error('Please enter all fields')
    }

    // check if user exits
    const userExists = await User.findOne({email})

    if (userExists){
        res.status(400)
        throw new Error('User already exists') 
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


  const url = req.protocol + "://" + req.get("host");

    // Create user
    const user = await User.create({
        name,
        id_no,
        // profilePicture: url + "/uploads/profile/" + req.file.filename,
        email,
        role,
        password: hashedPassword
    })

    if(user){
        res.status(201).json( {
            _id: user.id,
            name: user.name,
            id_no: user.id_no,
            // profilePicture: user.profilePicture,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Authenticate a user
// @route   POST /api/login
// @access  Public

const loginUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body

    // check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json( {
            _id: user.id,
            name: user.name,
            id_no: user.id_no,
            profilePicture: user.profilePicture,
            followers: user.followers,
            followings: user.followings,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc    Update User
// @route   PUT /api/users/:id
// @access  Private

const updateUser = asyncHandler(
    async (req, res) => {
        const user = await User.findById(req.params.id)
        if(!user){
            res.status(400)
            throw new Error('User not found')
        }

        // Check for profile picture
        // if(!req.file){
        //     res.status(401)
        //     throw new Error('No file')
        // }
        if(req.body.password){
            // Hash password
           const salt = await bcrypt.genSalt(10)
           const hashedPassword = await bcrypt.hash(req.body.password, salt)
           req.body.password = hashedPassword
        }
        if(req.file){
            // Profile picture
            const url = req.protocol + "://" + req.get("host");
            const uploadProfilePic = await user.updateOne({ $set: {
                profilePicture: url + "/uploads/profile/" + req.file.filename,
            }});
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })

        res.status(200).json(updatedUser)
    }
)

// @desc    Delete Users
// @route   DELETE /api/users/:id
// @access  Admin

const deleteUser = asyncHandler(
    async (req, res) => {
        const user = await User.findById(req.params.id)

        // Check for user
        if(!req.user){
            res.status(401)
            throw new Error('Not Authorized')
        }

        if(!user){
            res.status(400)
            throw new Error('User not found')
        }

        await user.remove()

        res.status(200).json({ id: req.params.id })
    }
)

// @desc    Get all users
// @route   GET /api/users
// @access  Admin

const getAllUsers = asyncHandler( async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})


// @desc    Get user data
// @route   GET /api/users/students
// @access  Admin

const getManagers = asyncHandler( async (req, res) => {
    const managers = await User.find({role: "Manager"})
    res.status(200).json(managers)
})

// @desc    Get user data
// @route   GET /api/users/students
// @access  Admin

const getEmployees = asyncHandler( async (req, res) => {
    const employees = await User.find({role: "Employee"})
    res.status(200).json(employees)
})

// @desc    Get other user data
// @route   GET /api/users/me
// @access  Private

const getOther = asyncHandler( async (req, res) => {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private

const getMe = asyncHandler( async (req, res) => {
    res.status(200).json(req.user)
})

// follow/unfollow a user
const follow = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
  
    try {
      const user = await User.findById(id);
      const followedUser = await User.findById(userId)
      if (!user.followings.includes(userId)) {
        await user.updateOne({ $push: { followings: userId } });
        await followedUser.updateOne({ $push: { followers: id } });
        res.status(200).json("Followed");
      } else {
        await user.updateOne({ $pull: { followings: userId } });
        await followedUser.updateOne({ $pull: { followers: id } });
        res.status(200).json("Unfollowed");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });

// Generate JWT

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}

module.exports = {
    registerUser, loginUser, updateUser, deleteUser, getMe, getOther, getAllUsers, getEmployees, getManagers, follow
}