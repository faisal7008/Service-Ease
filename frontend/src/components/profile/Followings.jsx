import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserPic from "../../assets/user.webp";
import userService from "../../features/users/userService";
import { getUser } from "../../features/users/userSlice";

export default function Followings({user, followingId}) {
    // const {friendUser} = useSelector(state => state.users)
    const [following, setFollowing] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
      // dispatch(getUser(followingId))
        userService
          .getUser(followingId, user.token)
          .then((res) => setFollowing(res))
          .catch((err) => console.log(err.message));
      }, [followingId, user]);
  return (
    <div className=" p-3 ">
        <div className="flex border-b-2 pb-3 items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              src={UserPic}
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {following?.name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {following?.email}
            </p>
          </div>
          <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
            <button  className="bg-teal-500 p-2 rounded-md text-teal-50">
              - unfollow
            </button>
          </div>
        </div>
    </div>
  )
}
