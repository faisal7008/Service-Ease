// import { useEffect } from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import announcementPic from "../../assets/coder.jpeg";
import UserPic from "../../assets/user.webp";
// import announcementService from "../../features/announcements/announcementService";
// import { deleteAnnouncement } from "../../features/announcements/announcementSlice";
// import userService from "../../features/users/userService";
// import { followUser, getMyProfile, getUser } from "../../features/users/userSlice";

export default function Announcement({ announcement }) {
//   const { user } = useSelector((state) => state.auth);
//   const { profile } = useSelector((state) => state.users);
//   const [friendUser, setFriendUser] = useState();
//   const [like, setLike] = useState(announcement.likes.length);
//   const [isLiked, setIsLiked] = useState(false);
//   const [isFollowing, setIsFollowing] = useState(false);
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getMyProfile())
//   },[isFollowing])

//   useEffect(() => {
//     setIsLiked(announcement.likes.includes(user._id));
//   }, [user._id, announcement.likes]);

//   useEffect(() => {
//     // dispatch(getUser(announcement.userId))
//     userService
//       .getUser(announcement.userId, user.token)
//       .then((res) => setFriendUser(res))
//       .catch((err) => console.log(err.message));
//   }, [announcement]);

//   useEffect(() => {
//     setIsFollowing(profile?.followings?.includes(friendUser?._id));
//   }, [friendUser?._id, profile?.followings]);

//   const likeHandler = () => {
//     try {
//       announcementService.likeannouncement(announcement._id, {userId: user._id}, user.token)
//     } catch (err) {}
//     setLike(isLiked ? like - 1 : like + 1);
//     setIsLiked(!isLiked);
//   };

//   const handleDelete = (announcementId) => {
//     dispatch(deleteAnnouncement({announcementId, userId: user._id}))
//   };

//   const handleFollow = () => {
//     dispatch(followUser({userId: friendUser?._id}))
//     setIsFollowing(!isFollowing)
//   }

  return (
    <div>
      <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
      </div>
    </div>
  );
}
