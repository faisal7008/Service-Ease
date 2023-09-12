import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateIssue } from '../../features/issues/issueSlice';

export default function DescriptionBox({ issue }) {
  const [focus, setFocus] = useState(false);
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const descData = {
      description: desc,
    };
    console.log(desc);
    dispatch(updateIssue({ IssueId: issue._id, IssueData: descData }));
    setFocus(false);
  };
  return (
    <form tabIndex={0} onFocus={() => setFocus(true)} onSubmit={handleSubmit}>
      <div className={focus ? 'w-full border border-gray-200 rounded bg-gray-50' : 'w-full'}>
        <div className={focus ? 'px-2 py-2 bg-white' : 'px-0 py-1 bg-white'}>
          <label for='description' className='sr-only'>
            Your Description
          </label>
          <textarea
            id='description'
            onChange={(e) => setDesc(e.target.value)}
            rows={focus ? '2' : '1'}
            className={
              focus
                ? 'w-full px-2 resize-none text-sm text-gray-900 bg-white border-0 focus:ring-0'
                : 'w-full px-2 resize-none text-sm rounded text-gray-900 bg-white border-0 transition duration-200 ease-in hover:bg-gray-200'
            }
            defaultValue={issue?.description}
            placeholder='Add a description...'
            required
          ></textarea>
        </div>
        <div
          className={
            focus
              ? 'flex items-center justify-between px-3 py-2 border-t dark:border-gray-600'
              : 'hidden'
          }
        >
          <div className='flex gap-2'>
            <button
              type='submit'
              className='inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-teal-700 rounded focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800'
            >
              Save
            </button>
            <button
              onClick={() => setFocus(false)}
              type='button'
              className='inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-teal-700 rounded focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800'
            >
              Cancel
            </button>
          </div>
          <div className='flex pl-0 space-x-1 sm:pl-2'>
            <button
              type='button'
              className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Attach file</span>
            </button>
            <button
              type='button'
              className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Set location</span>
            </button>
            <button
              type='button'
              className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Upload image</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
