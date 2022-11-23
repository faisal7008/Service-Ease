const path = require('path')
const multer = require('multer')

var storagePost = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/posts/')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var storageProfile = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/profile/')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var uploadPosts = multer({
    storage: storagePost,
    fileFilter: function (req, file, callback) {
        callback(null, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})

var uploadProfile = multer({
    storage: storageProfile,
    fileFilter: function (req, file, callback) {
        callback(null, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})

module.exports = {
    uploadPosts, uploadProfile
}
