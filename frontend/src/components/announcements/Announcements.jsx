import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnnouncements } from '../../features/announcements/announcementSlice';
import AddAnnouncement from './AddAnnouncement';
import Announcement from './Announcement';

export default function Announcements() {
  const { user } = useSelector((state) => state.auth);
  const { announcements, isSuccess, isError } = useSelector((state) => state.announcements);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnnouncements());
  }, [dispatch, isSuccess, isError]);
  return (
    <div className='h-full overflow-auto w-full sm:pl-5 bg-slate-100 shadow-slate-300 shadow-inner'>
      <div className='grid max-w-[40rem] m-4 grid-cols-1 gap-4'>
        {announcements.map((announcement) => (
          <Announcement key={announcement._id} announcement={announcement} />
        ))}
      </div>
      {user.role === 'Leader' && (
        <div className='hs-tooltip flex justify-end'>
          <div className=' hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 m-5 bottom-0 group'>
            <h1 className='mb-2 p-2 font-medium text-sm mr-6 bg-teal-100 rounded shadow text-teal-600'>
              New Announcement
            </h1>
          </div>
          <div className='absolute bottom-4 right-6'>
            <button
              type='button'
              className='hs-tooltip-toggle flex justify-center items-center ml-auto w-14 h-14 text-white bg-teal-700 rounded-full hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 focus:outline-none dark:focus:ring-teal-800'
              data-hs-overlay='#add-announcement'
            >
              <svg
                aria-hidden='true'
                className='w-8 h-8'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'></path>
              </svg>
              <span className='sr-only'>Open actions menu</span>
            </button>
          </div>
        </div>
      )}
      {user.role === 'Leader' && <AddAnnouncement />}
    </div>
  );
}
