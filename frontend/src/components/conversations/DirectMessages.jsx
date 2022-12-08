import { useEffect, useState } from "react";
import UserLogo from "../../assets/user.webp";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import userService from "../../features/users/userService";
import {deleteConversation} from "../../features/conversations/conversationSlice"

export default function DirectMessages(props) {
  const { conversation, currentUser } = props;
  const dispatch = useDispatch()
  const [friendUser, setFriendUser] = useState({});

  const handleClick = () => {
    // console.log(conversation);
    const choice = window.confirm(`Are you sure you want to remove ${friendUser.name}`);
    if(choice){
      dispatch(deleteConversation(conversation._id))
    }
  }

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    // console.log(friendId)
    userService
      .getUser(friendId, currentUser.token)
      .then((res) => setFriendUser(res))
      .catch((err) => console.log(err.message));
  }, [currentUser, conversation]);

  return (
    <li className="px-3 py-1 rounded-md hover:shadow-sm group-hover:bg-slate-200 cursor-pointer sm:py-2">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-7 h-7 rounded-full"
            src={UserLogo}
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate ">
            {friendUser.name}
          </p>
          {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {friendUser.role}
          </p> */}
        </div>
        <div className="text-base font-thin text-gray-900">
          <button onClick={handleClick} className=" px-3 py-1 text-transparent group-hover:text-gray-600">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </li>
  );
}
