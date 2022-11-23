const Conversation = require("../models/Conversation");
const asyncHandler = require("express-async-handler");

// @desc    create a conversation between sender and receiver
// @route   POST /api/conversations
// @access  Public

const createDM = asyncHandler(async (req, res) => {
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

// @desc    create teams
// @route   POST /api/conversations
// @access  Public

const createTeam = asyncHandler(async (req, res) => {
  const newConversation = new Conversation({
    name: req.body.name,
    members: req.body.members,
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @desc    get conversations
// @route   GET /api/conversations/conversationId
// @access  Public

const getDMs = asyncHandler(async (req, res) => {
  try {
    const conversation = await Conversation.find({
      $and: [
        { members: { $in: [req.params.userId] } },
        { members: { $size: 2 } },
      ],
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

const deleteConversation = asyncHandler(async (req, res) => {
  const conversation = await Conversation.findById(req.params.conversationId);
  if (!conversation) {
    res.status(400);
    throw new Error("Conversation not found");
  }
  await conversation.remove();
  res.status(200).json({ id: req.params.conversationId })
});

const getTeams = asyncHandler(async (req, res) => {
  try {
    const conversation = await Conversation.find({
      $and: [
        { members: { $in: [req.params.userId] } },
        { "members.2": { $exists: true } },
      ],
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @desc    get conversations between two users
// @route   POST /api/conversations/:firstUserId/:secondUserId
// @access  Public

const conversationBetweenUsers = asyncHandler(async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = {
  createDM,
  createTeam,
  getDMs,
  getTeams,
  deleteConversation,
  conversationBetweenUsers,
};
