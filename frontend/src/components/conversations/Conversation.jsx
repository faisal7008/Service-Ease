import { useEffect, useState } from "react";
import UserLogo from "../../assets/user.webp";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userService from "../../features/users/userService";

export default function Conversation(props) {
  const { conversation, currentUser } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [friendUser, setFriendUser] = useState({})

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    // console.log(friendId)
    try {
      userService.getUser(friendId, currentUser.token).then(res => 
      setFriendUser(res) )
    } catch (error) {
      console.log(error)
    }
  }, [currentUser, conversation]);

  return (
    <li className="px-3 py-1 sm:py-3">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="w-8 h-8 rounded-full" src={UserLogo} alt="Neil image" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate ">
            {friendUser.name}
          </p>
          {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {friendUser.role}
          </p> */}
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900">
          {/* $320 */}
        </div>
      </div>
    </li>
  );
}
