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
    <div >
      <div className="flex flex-col bg-white border shadow-sm rounded-lg">
  <div className="p-6">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
      Announcement title
    </h3>
    <p className="mt-2 text-gray-800 dark:text-gray-400">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestiae fuga, animi ad id expedita molestias, odit aspernatur voluptas odio recusandae corrupti sint iste enim, doloremque est vel? Tempore magnam ea, inventore illum doloremque quam modi quo vero, beatae facere quasi nesciunt maxime! Itaque dolores quo similique ab obcaecati sapiente veritatis nulla laudantium asperiores voluptas. Corporis quibusdam id exercitationem numquam dolorum, praesentium quia repellat. Expedita totam repellat eligendi hic adipisci libero aspernatur asperiores, optio est soluta nulla recusandae harum quia maiores quasi tempora temporibus repudiandae dolorum architecto! Laboriosam corrupti perferendis modi aliquid placeat voluptatibus saepe autem rerum, repellat quod magni?
    </p>
    <div className=" grid grid-cols-1">
    <a className=" inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700" href="#">
      Card link
      <svg className="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </a>
    <a className=" inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700" href="#">
      Card link
      <svg className="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </a>
    </div>
    <div>
        
    </div>
  </div>
</div>
    </div>
  );
}
