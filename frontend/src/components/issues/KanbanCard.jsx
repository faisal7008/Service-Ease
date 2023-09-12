import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

export default function KanbanCard({ title, issues, setIssue, Icon, color, iconColor }) {
  return (
    <div className=' p-3 bg-gray-100 rounded-md shadow-none'>
      <div className=' flex justify-between mt-1 mb-3'>
        <h1 className='inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 uppercase'>
          {title}
          <span
            className={`h-6 w-6 flex justify-center items-center rounded-full text-xs font-medium bg-${color}-200 text-${color}-800`}
          >
            {issues?.length}
          </span>
        </h1>
        <button
          data-hs-overlay={title === 'To Do' && `#create-issue`}
          className={`text-${iconColor}-500 hover:text-${iconColor}-800`}
        >
          {Icon}
        </button>
      </div>
      <div className=' w-80 grid grid-cols-1 gap-2'>
        {issues?.map((issue) => (
          // <Draggable>
          <Link
            to={issue?._id}
            key={issue?._id}
            onClick={() => setIssue(issue)}
            className='block min-w-full cursor-pointer p-3 bg-white border border-gray-200 rounded shadow-sm shadow-gray-300 hover:bg-gray-200'
            data-hs-overlay='#hs-vertically-centered-modal'
          >
            <div className='flex items-center space-x-4'>
              <div className='flex-1 min-w-0'>
                <p className='text-xs font-medium  text-gray-500 truncate'>Due on</p>
                <p className='text-sm text-gray-900 truncate'>
                  {moment(issue?.duedate).format('MMM DD')}
                </p>
              </div>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                  alt='Neil image'
                />
              </div>
            </div>
            <div className='flex pt-2 font-mono text-sm items-center'>{issue?.summary}</div>
          </Link>
          // </Draggable>
        ))}
      </div>
    </div>
  );
}
