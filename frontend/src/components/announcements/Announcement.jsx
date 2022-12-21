import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import announcementPic from "../../assets/coder.jpeg";
import { Button, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import moment from "moment";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import UserPic from "../../assets/user.webp";
import DialogBox from "./DialogBox";
import { deleteAnnouncement } from "../../features/announcements/announcementSlice";
import announcementService from "../../features/announcements/announcementService";
import { getMyProfile } from "../../features/users/userSlice";
import userService from "../../features/users/userService";
// import announcementService from "../../features/announcements/announcementService";
// import { deleteAnnouncement } from "../../features/announcements/announcementSlice";
// import userService from "../../features/users/userService";
// import { followUser, getMyProfile, getUser } from "../../features/users/userSlice";

export default function Announcement({ announcement }) {
    const { user } = useSelector((state) => state.auth);
    const { profile } = useSelector((state) => state.users);
    const [friendUser, setFriendUser] = useState();
    const [like, setLike] = useState(announcement?.likes?.length);
    const [isLiked, setIsLiked] = useState(false);
    // const [isFollowing, setIsFollowing] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getMyProfile())
    },[announcement])

    useEffect(() => {
      setIsLiked(announcement?.likes?.includes(user._id));
    }, [user._id, announcement?.likes]);

    useEffect(() => {
      // dispatch(getUser(announcement.userId))
      userService
        .getUser(announcement?.userId, user.token)
        .then((res) => setFriendUser(res))
        .catch((err) => console.log(err.message));
    }, [announcement]);

  //   useEffect(() => {
  //     setIsFollowing(profile?.followings?.includes(friendUser?._id));
  //   }, [friendUser?._id, profile?.followings]);

    const likeHandler = () => {
      try {
        announcementService.likeAnnouncement(announcement?._id, {userId: user._id}, user.token)
      } catch (err) {}
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    };

    const handleDelete = (announcementId) => {
      const result = window.confirm("Are you sure you want to remove the announcement?")
      if(result){
        dispatch(deleteAnnouncement({announcementId, userId: user._id}))
      }
    };

  //   const handleFollow = () => {
  //     dispatch(followUser({userId: friendUser?._id}))
  //     setIsFollowing(!isFollowing)
  //   }

  const description = announcement?.desc?.split(/\n/g)

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-auto">
      <div className="flex flex-col ">
        <div className="px-6 py-3">
        <div className="flex mb-3 items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              src={
                friendUser?.profilePicture
                  ? friendUser?.profilePicture
                  : UserPic
              }
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold inline-flex items-center text-gray-900 truncate dark:text-white">
              {friendUser?.name}{" "}
              <span className="ml-2 text-xs font-medium font-mono text-gray-500">
                {moment(announcement?.updatedAt).endOf('minutes').fromNow()}
              </span>
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {friendUser?.email}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white">
           {announcement?.userId === user._id && <Menu>
                    <MenuHandler>
                      <Button
                        className="bg-transparent shadow-none px-0 py-2 rounded-md hover:bg-slate-200 transition-all text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </Button>
                    </MenuHandler>
                    <MenuList className="p-1 z-10 w-32 ml-14">
                      <MenuItem
                          className="flex w-full justify-left items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-800 hover:bg-slate-200 hover:font-medium"
                        >
                          <FiEdit /> edit
                        </MenuItem>
                      <MenuItem
                        onClick={() => handleDelete(announcement?._id)}
                        className="flex w-full justify-left items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-800 hover:bg-slate-200 hover:font-medium"
                      >
                        <BsTrash /> delete
                      </MenuItem>
                    </MenuList>
            </Menu>}
          </div>
          </div>
          {/* <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Announcement title
          </h3> */}
          <p className="mt-2 font-normal text-justify text-sm text-gray-800 dark:text-gray-400">
            {description?.map(str => <> {str}<br/> </>)}
          </p>
          {/* <div className=" grid grid-cols-1">
            <a
              className=" inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700"
              href="#"
            >
              Card link
              <svg
                className="w-2.5 h-auto"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
            <a
              className=" inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700"
              href="#"
            >
              Card link
              <svg
                className="w-2.5 h-auto"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div> */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
