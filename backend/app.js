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

// use Routes
app.use('/api/users', users);

app.use(errorHandler)

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})