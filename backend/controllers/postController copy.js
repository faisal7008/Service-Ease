const Post = require("../models/Post");
const mongoose = require("mongoose");
const User = require("../models/User");
const asyncHandler = require('express-async-handler')

// Creat new Post
const createPost = asyncHandler(async (req, res) => {
//   const newPost = new Post(req.body);
  const url = req.protocol + "://" + req.get("host");

  const newPost = await Post.create({
    userId: req.body.userId,
    desc: req.body.desc,
    image: url + "/uploads/posts/" + req.file.filename,
  });

  res.status(200).json(newPost);
});

// Get all post

const getAllPosts = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});


// Get a post

const getPost = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get user posts

const getUserPosts = asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  try {
    const posts = await Post.find({userId: userId});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get liked posts

const getLikedPosts = asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  try {
    const posts = await Post.find({likes: userId});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a post
const updatePost = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;


  const url = req.protocol + "://" + req.get("host");
  try {
    const post = await Post.findById(postId);
    if (post.userId === userId) {
        const updatedPost = await post.updateOne({ $set: {
            desc: req.body.desc,
            image: url + "/uploads/posts/" + req.file.filename,
        }});
    //   await post.updateOne({ $set: req.body });
      res.status(200).json(post);
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a post
const deletePost = asyncHandler(async (req, res) => {
  const postId = req.params.postId;
  const userId = req.params.userId;

  try {
    const post = await Post.findById(postId);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json(post);
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// like/dislike a post
const likePost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await Post.findById(id);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post Unliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Timeline Posts
const getTimelinePosts = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  try {
    const currentUserPosts = await Post.find({ userId: userId });
    const followingPosts = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res
      .status(200)
      .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
      .sort((a,b)=>{
          return b.createdAt - a.createdAt;
      })
      );
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = {
    createPost, getAllPosts, getLikedPosts, getUserPosts, deletePost, getPost, getTimelinePosts, likePost, updatePost
}