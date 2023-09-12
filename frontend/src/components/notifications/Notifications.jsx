import {
  Avatar,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import { BellIcon, ClockIcon, CreditCardIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notification from './Notification';
import {
  deleteNotifications,
  getNotifications,
} from '../../features/notifications/notificationSlice';

export default function Notifications() {
  const { notifications } = useSelector((state) => state.notifications);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotifications(user._id));
  }, [user, dispatch]);
  const myNotifications = notifications?.filter((notification) => notification.toUser === user._id);
  const unViewed = myNotifications?.filter((notification) => !notification.viewed);

  return (
    <Menu>
      <MenuHandler>
        <div className='relative inline-flex flex-shrink-0 justify-center items-center'>
          <IconButton
            className='flex justify-center items-end  focus:ring-2 focus:ring-gray-400 rounded-full'
            variant='text'
            color='blue-gray'
            // onClick={viewNotifications}
          >
            <BellIcon className='h-5 w-5 text-slate-900' />
          </IconButton>
          {unViewed.length > 0 && (
            <span className='absolute animate-bounce -top-1 -right-2 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-rose-500 text-white'>
              {unViewed?.length} +
            </span>
          )}
        </div>
      </MenuHandler>
      <MenuList className=' w-80 pb-0 pt-0 pr-0 pl-0 max-h-96 mt-1 z-30 -ml-4 sm:-ml-28 shadow-lg'>
        <MenuItem className='pt-2 bg-teal-100 rounded-none text-teal-700 text-xs font-medium border-b-2 border-white uppercase'>
          Notifications
        </MenuItem>
        {myNotifications?.map((notification) => (
          <Notification key={notification._id} notification={notification} />
        ))}
        {myNotifications.length === 0 && (
          <div className='w-full h-full flex justify-center font-medium items-center'>
            <h1 className='uppercase text-xs py-8'>No notifications</h1>
          </div>
        )}
        <button
          onClick={() => dispatch(deleteNotifications(user._id))}
          className='sticky bottom-0 text-sm font-semibold w-full py-3 transition-colors duration-300 ease-in-out hover:bg-teal-600 hover:text-white text-teal-700 border-t-2 border-white bg-teal-100'
        >
          clear all
        </button>
      </MenuList>
    </Menu>
  );
}
