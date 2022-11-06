import { useEffect, useState } from "react";
import UserLogo from "../../assets/user.webp";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import userService from "../../features/users/userService";

export default function Teams(props) {
  const { conversation, currentUser } = props;

  return (
    <li className="px-3 py-1 cursor-pointer sm:py-3">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="w-8 h-8 rounded-full" src={UserLogo} alt="Neil image" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate ">
            {conversation.name}
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
