import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostPic from "../../assets/coder.jpeg";
// import UserPic from "../../assets/user.webp";
import postService from "../../features/posts/postService";
import { deletePost } from "../../features/posts/postSlice";
import userService from "../../features/users/userService";
import {
  followUser,
  getMyProfile,
  getUser,
} from "../../features/users/userSlice";
import moment from "moment"
import { HiDotsVertical } from "react-icons/hi";
import { Button, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

const UserPic = "https://res.cloudinary.com/dopuxe0m5/image/upload/v1671447572/service%40ease%20project%20assets/user_ufjgmf.webp"

export default function Post({ post }) {
  const { user } = useSelector((state) => state.auth);
  const { profile, isSuccess, isError } = useSelector((state) => state.users);
  const [friendUser, setFriendUser] = useState();
  const [like, setLike] = useState(post?.likes?.length);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch, isSuccess, isError]);

  useEffect(() => {
    setIsLiked(post?.likes?.includes(user._id));
  }, [user._id, post?.likes]);

  useEffect(() => {
    // dispatch(getUser(post.userId))
    userService
      .getUser(post?.userId, user.token)
      .then((res) => setFriendUser(res))
      .catch((err) => console.log(err.message));
  }, [post]);

  useEffect(() => {
    setIsFollowing(profile?.followings?.includes(friendUser?._id));
  }, [friendUser?._id, profile]);

  const likeHandler = () => {
    try {
      postService.likePost(post?._id, { userId: user._id }, user.token);
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // useEffect(() => {
  //   dispatch(followUser({ userId: friendUser?._id }));   
  // }, [friendUser, isFollowing])

  const followHandler = () => {
    // try {
    //   userService.followUser(profile._id, { userId: profile._id }, user.token);
    // } catch (err) {}
    dispatch(followUser({ userId: friendUser?._id })); 
    setIsFollowing(!isFollowing);
  };

  const handleDelete = (postId) => {
    const result = window.confirm("Are you sure you want to delete the post?")
    if(result){
      dispatch(deletePost({ postId, userId: user._id }));
    }
  }

  // const handleFollow = () => {
  //   setIsFollowing(!isFollowing);
  // };
  const description = post?.desc.split(/\n/g)
  // console.log(description)

  return (
    <div>
      <div className="max-w-md bg-white rounded-lg border border-gray-100 shadow-md">
        <div className="flex p-3 items-center space-x-4">
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
                {moment(post?.createdAt).endOf('minutes').fromNow()}
              </span>
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {friendUser?.email}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-white">
            <button
              onClick={followHandler}
              className=" bg-teal-500 p-2 rounded text-sm text-white"
            >
              {!isFollowing ? <>Follow</> : <>Following</>}
            </button>
           {post.userId === user._id && <Menu>
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
                        onClick={() => handleDelete(post._id)}
                        className="flex w-full justify-left items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-800 hover:bg-slate-200 hover:font-medium"
                      >
                        <BsTrash /> delete
                      </MenuItem>
                    </MenuList>
            </Menu>}
          </div>
        </div>
        <div>
          <img className="" src={post?.image} loading="lazy" alt="" />
        </div>
        <div className="p-5">
          <p className="desc mb-4">{description?.map(str => <> {str}<br/> </>)}</p>
          <div className="flex gap-4 mb-2 text-rose-600">
            <button onClick={likeHandler} className="heart">
              {!isLiked ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <button>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
            <button>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between ">
            <h1>{like} likes</h1>
            <h1>see comments...</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
