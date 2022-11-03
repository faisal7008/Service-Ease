const Message = require("../models/Message");
const asyncHandler = require('express-async-handler')

// @desc    post new message
// @route   POST /api/messages
// @access  Public

const postMessage = asyncHandler( async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @desc    get all messages
// @route   GET /api/messages/:conversationId
// @access  Public

const getMessage = asyncHandler( async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = {
    postMessage, getMessage
}