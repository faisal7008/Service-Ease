const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = Conversation = mongoose.model("conversation", ConversationSchema);
