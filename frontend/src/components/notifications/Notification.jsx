import { ClockIcon } from "@heroicons/react/24/solid";
import { Avatar, MenuItem, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import userService from "../../features/users/userService";
import moment from "moment";
import { viewedNotification } from "../../features/notifications/notificationSlice";
import { useDispatch } from "react-redux";

export default function Notification({ notification }) {
  const [fromUser, setFromUser] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
    userService
      .getUser(notification?.fromUser)
      .then((res) => setFromUser(res))
      .catch((err) => console.log(err));
  }, [notification]);

  return (
    <MenuItem className="px-4 py-2 hover:bg-gray-100">
        <button type="button" className="flex items-center gap-4" onClick={() => dispatch(viewedNotification(notification?._id))}>
      <div className="relative inline-flex flex-shrink-0 justify-center items-center">
        <Avatar
          src={
            fromUser?.profilePicture
              ? fromUser?.profilePicture
              : "https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
          }
          alt="from user"
          size="sm"
          variant="circular"
        />
        {notification?.viewed ? (
          <></>
        ) : (
          <span class="absolute top-0 right-0 inline-flex items-center w-3.5 h-3.5 rounded-full border-2 border-white text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white"></span>
        )}
      </div>
      <div className="flex-1">
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 text-left font-normal"
        >
          {notification?.message}
        </Typography>
        <Typography
          variant="small"
          color="blue-gray"
          className="flex items-center gap-1 text-xs font-normal opacity-60"
        >
          <ClockIcon className="h-3.5 w-3.5" />{" "}
          {moment(notification?.createdAt).fromNow("hour")}
        </Typography>
      </div></button>
    </MenuItem>
  );
}
