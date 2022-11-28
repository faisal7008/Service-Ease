import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostPic from "../../assets/coder.jpeg";
import UserPic from "../../assets/user.webp";
import postService from "../../features/posts/postService";
import { deletePost } from "../../features/posts/postSlice";
import userService from "../../features/users/userService";
import { followUser, getMyProfile, getUser } from "../../features/users/userSlice";

export default function Post({ post }) {
  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.users);
  const [friendUser, setFriendUser] = useState();
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyProfile())
  },[isFollowing])

  useEffect(() => {
    setIsLiked(post.likes.includes(user._id));
  }, [user._id, post.likes]);

  useEffect(() => {
    // dispatch(getUser(post.userId))
    userService
      .getUser(post.userId, user.token)
      .then((res) => setFriendUser(res))
      .catch((err) => console.log(err.message));
  }, [post]);

  useEffect(() => {
    setIsFollowing(profile?.followings?.includes(friendUser?._id));
  }, [friendUser?._id, profile?.followings]);

  const likeHandler = () => {
    try {
      postService.likePost(post._id, {userId: user._id}, user.token)
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const handleDelete = (postId) => {
    dispatch(deletePost({postId, userId: user._id}))
  };

  const handleFollow = () => {
    dispatch(followUser({userId: friendUser?._id}))
    setIsFollowing(!isFollowing)
  }

  return (
    <div>
      <div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex p-3 items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              src={UserPic}
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {friendUser?.name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {friendUser?.email}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <button onClick={() => handleFollow()} className=" bg-teal-500 p-2 rounded text-sm text-white">
              { !isFollowing ? 
              <>Follow</> : <>Following</>
            }
            </button>
            {/* onClick={() => handleDelete(post?._id)} */}
          </div>
        </div>
        <a href="#">
          <img className="" src={post?.image} alt="" />
        </a>
        <div className="p-5">
          <div className="desc mb-4">{post?.desc}</div>
          <div className="flex gap-4 mb-2 text-rose-600">
            <button onClick={likeHandler} className="heart">
              {!isLiked ? 
              (<svg
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
              </svg>) :
              (<svg
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
              </svg>)
              }
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
