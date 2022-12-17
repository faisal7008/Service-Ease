const Announcement = require("../models/Announcement");
const mongoose = require("mongoose");
const User = require("../models/User");
const asyncHandler = require('express-async-handler')

// Creat new Announcement
const createAnnouncement = asyncHandler(async (req, res) => {
//   const newAnnouncement = new Announcement(req.body);
  const url = req.protocol + "://" + req.get("host");

  const newAnnouncement = await Announcement.create({
    userId: req.body.userId,
    desc: req.body.desc,
    // image: url + "/uploads/announcements/" + req.file.filename,
  });

  res.status(200).json(newAnnouncement);
});

// Get all Announcement

const getAllAnnouncements = asyncHandler(async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json(error);
  }
});


// Get a Announcement

const getAnnouncement = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const announcement = await Announcement.findById(id);
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a Announcement
const updateAnnouncement = asyncHandler(async (req, res) => {
  // const announcementId = req.params.id;
  // const { userId } = req.body;
  const announcement = await Announcement.findByIdAndUpdate(req.params.id, req.body, {new: true})
  if(announcement){
      res.status(201).json(announcement)
  }
  else{
      res.status(400).json("announcement not found")
  }

  // const url = req.protocol + "://" + req.get("host");
  // try {
  //   const announcement = await Announcement.findById(announcementId);
  //   if (announcement.userId === userId) {
  //       const updatedAnnouncement = await Announcement.updateOne({ $set: {
  //           desc: req.body.desc,
  //           image: url + "/uploads/Announcements/" + req.file.filename,
  //       }});
  //   //   await Announcement.updateOne({ $set: req.body });
  //     res.status(200).json(announcement);
  //   } else {
  //     res.status(403).json("Action forbidden");
  //   }
  // } catch (error) {
  //   res.status(500).json(error);
  // }
});

// Delete a Announcement
const deleteAnnouncement = asyncHandler(async (req, res) => {
  const announcementId = req.params.announcementId;
  const userId = req.params.userId;

  // const announcement = await Announcement.findById(announcementId)
  // await announcement.remove()
  try {
    const announcement = await Announcement.findById(announcementId);
    if (announcement.userId === userId) {
      await announcement.deleteOne();
      res.status(200).json(announcement);
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// like/dislike a Announcement
const likeAnnouncement = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const announcement = await Announcement.findById(id);
    if (!announcement.likes.includes(userId)) {
      await announcement.updateOne({ $push: { likes: userId } });
      res.status(200).json("Announcement liked");
    } else {
      await announcement.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Announcement Unliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Timeline Announcements
const getTimelineAnnouncements = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  try {
    const currentUserAnnouncements = await Announcement.find({ userId: userId });
    const followingAnnouncements = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "Announcements",
          localField: "following",
          foreignField: "userId",
          as: "followingAnnouncements",
        },
      },
      {
        $project: {
          followingAnnouncements: 1,
          _id: 0,
        },
      },
    ]);

    res
      .status(200)
      .json(currentUserAnnouncements.concat(...followingAnnouncements[0].followingAnnouncements)
      .sort((a,b)=>{
          return b.createdAt - a.createdAt;
      })
      );
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = {
    createAnnouncement, getAllAnnouncements, deleteAnnouncement, getAnnouncement, getTimelineAnnouncements, likeAnnouncement, updateAnnouncement
}