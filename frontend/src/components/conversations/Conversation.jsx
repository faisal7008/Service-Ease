import { useEffect, useState } from "react";
import UserLogo from "../../assets/user.webp";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { getUser } from "../../features/users/userSlice";
import userService from "../../features/users/userService";

export default function Conversation(props) {
  const { conversation, currentUser } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { user, isSuccess, isError } = useSelector((state) => state.users)
  const [friendUser, setFriendUser] = useState({})

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    console.log(friendId)
    // dispatch(getUser(friendId));
    // if(user && isSuccess){
    //   setFriendUser(user)
    // }
    try {
      userService.getUser(friendId, currentUser.token).then(res => 
      setFriendUser(res) )
    } catch (error) {
      console.log(error)
    }
  }, [currentUser, conversation]);

  return (
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="w-8 h-8 rounded-full" src={UserLogo} alt="Neil image" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            {friendUser.name}
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            {friendUser.role}
          </p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {/* $320 */}
        </div>
      </div>
    </li>
  );
}
