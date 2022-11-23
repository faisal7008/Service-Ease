import { useEffect } from "react";
import UserLogo from "../../assets/user.webp";
import moment from "moment";
import userService from "../../features/users/userService";
import { useState } from "react";

export default function Message({ prevMessage, message, currentUser }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    // console.log(nextMessage?.text)
    // console.log(message.text)
    // try {
    //   userService
    //     .getUser(message.sender, currentUser.token)
    //     .then((res) => setUser(res));
    // } catch (error) {
    //   console.log(error);
    // }
  }, [message, currentUser.token, prevMessage]);

  return (
    <div className="message w-full px-3 hover:bg-slate-200">
      {prevMessage?.senderName !== message?.senderName ? (
      <div className="flex items-start space-x-2 w-full">
        <div className="flex-shrink-0 mt-1">
          <img
            className="w-8 h-8 rounded-full"
            src={UserLogo}
            alt="Neil image"
          />
        </div>
        <div className="flex-1 max-w-md">
            <p className="text-sm font-semibold text-gray-900 truncate ">
              {message.senderName}{" "}
              <span className="ml-2 text-xs font-mono text-gray-500">
                {moment(message.createdAt).calendar()}
              </span>
            </p>
          <p className="text-sm font-medium text-gray-600">{message.text}</p>
        </div>
      </div>
      ) : (
        <div>
        <p className="text-sm ml-10 -mt-4 font-medium text-gray-600">{message.text} <span className="ml-2 text-xs font-mono text-transparent hover:text-gray-500 ">
        {moment(message.createdAt).format('LT')}
      </span></p></div>
      )}
    </div>
  );
}


{/* <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
      {nextMessage?.senderName !== message?.senderName && (
          <img
            className="w-8 h-8 rounded-full"
            src={UserLogo}
            alt="Neil image"
          />
          )}
        </div>
        <div className="flex-1 max-w-md">
          {nextMessage?.senderName !== message?.senderName && (
            <p className="text-sm font-semibold text-gray-900 truncate ">
              {message.senderName}{" "}
              <span className="ml-2 text-xs font-mono text-gray-500">
                {moment(message.createdAt).calendar()}
              </span>
            </p>
          )}
          {nextMessage?.senderName === message?.senderName ? 
          <p className="text-sm ml-8 font-medium text-gray-600">{message.text}</p> :
          <p className="text-sm font-medium text-gray-600">{message.text}</p>
          }
        </div>
      </div> */}