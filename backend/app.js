const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middlewares/errorMiddleware')

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// routes
const users = require('./routes/userRoutes');
const messages = require('./routes/messageRoutes');
const conversations = require('./routes/conversationRoutes');
const posts = require("./routes/postRoutes")

// use Routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/messages', messages);
app.use('/api/conversations', conversations);
app.use('/uploads/posts', express.static('uploads/posts'))
app.use('/uploads/profile', express.static('uploads/profile'))

app.use(errorHandler)

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})