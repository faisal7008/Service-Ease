import { useEffect } from "react";
import UserLogo from "../../assets/user.webp";
import moment from "moment"
import userService from "../../features/users/userService";
import { useState } from "react";

export default function Message({ message, currentUser }) {
  const [user, setUser] = useState("")
  useEffect(() => {
    try {
      userService.getUser(message.sender, currentUser.token).then(res => setUser(res))
    } catch (error) {
      console.log(error)
    }
  },[message, currentUser.token])
  
  return (
    <div className="message w-max px-3 py-4">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img className="w-8 h-8 rounded-full" src={UserLogo} alt="Neil image" />
        </div>
        <div className="flex-1 max-w-md">
          <p className="text-sm font-semibold text-gray-900 truncate ">
            {user?.name} <span className="ml-2 text-xs font-mono text-gray-500">{moment(message.createdAt).calendar()}</span>
          </p>
          <p className="text-sm font-medium text-gray-600">
            {message.text}
          </p>
        </div>
      </div>
    </div>
  );
}
