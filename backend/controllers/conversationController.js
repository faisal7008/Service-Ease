const Conversation = require("../models/Conversation");
const asyncHandler = require('express-async-handler')

// @desc    create a conversation between sender and receiver
// @route   POST /api/conversations
// @access  Public

const createConversation = asyncHandler( async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @desc    Register new user
// @route   POST /api/conversations
// @access  Public

const getConversation = asyncHandler( async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @desc    Register new user
// @route   POST /api/conversations
// @access  Public

const conversationBetweenUsers = asyncHandler( async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = {
    createConversation, getConversation, conversationBetweenUsers
}
