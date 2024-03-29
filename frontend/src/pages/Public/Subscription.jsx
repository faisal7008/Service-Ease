/* This example requires Tailwind CSS v2.0+ */
import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

export default function Subscription() {
  return (
    <div className=' bg-white px-4 py-12 min-h-screen items-center sm:px-6 lg:px-8'>
      <div className='lg:text-center'>
        <h2 className='text-lg font-semibold text-teal-600'>Subscription</h2>
        <p className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
          Enhance your Bussiness
        </p>
        <p className='mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto'>
          Hurry up! and Choose your plan
        </p>
      </div>
      <div className='mx-auto mt-6 grid justify-center md:flex gap-10 max-w-7xl'>
        <div className='p-4 w-full max-w-xs bg-white rounded-lg border shadow-md sm:p-8 '>
          <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>Standard plan</h5>
          <div className='flex items-baseline text-gray-900 dark:text-white'>
            <span className='text-3xl font-semibold'>$</span>
            <span className='text-5xl font-extrabold tracking-tight'>49</span>
            <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/month</span>
          </div>
          {/* <!-- List --> */}
          <ul role='list' className='my-7 space-y-5'>
            <li className='flex space-x-3'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-teal-600 dark:text-teal-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                2 team members
              </span>
            </li>
            <li className='flex space-x-3'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-teal-600 dark:text-teal-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                20GB Cloud storage
              </span>
            </li>
            <li className='flex space-x-3'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-teal-600 dark:text-teal-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                Integration help
              </span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>Sketch Files</span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>API Access</span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>
                Complete documentation
              </span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>
                24×7 phone &amp; email support
              </span>
            </li>
          </ul>
          <button
            type='button'
            className='text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'
          >
            Choose plan
          </button>
        </div>
        <div className='p-4 w-full max-w-xs bg-white rounded-lg border shadow-md sm:p-8 '>
          <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>Bussiness plan</h5>
          <div className='flex items-baseline text-gray-900 dark:text-white'>
            <span className='text-3xl font-semibold'>$</span>
            <span className='text-5xl font-extrabold tracking-tight'>99</span>
            <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/month</span>
          </div>
          {/* <!-- List --> */}
          <ul role='list' className='my-7 space-y-5'>
            <li className='flex space-x-3'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-teal-600 dark:text-teal-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                2 team members
              </span>
            </li>
            <li className='flex space-x-3'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-teal-600 dark:text-teal-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                20GB Cloud storage
              </span>
            </li>
            <li className='flex space-x-3'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-teal-600 dark:text-teal-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                Integration help
              </span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>Sketch Files</span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>API Access</span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>
                Complete documentation
              </span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>
                24×7 phone &amp; email support
              </span>
            </li>
          </ul>
          <button
            type='button'
            className='text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'
          >
            Choose plan
          </button>
        </div>
        <div className='p-4 w-full max-w-xs bg-white rounded-lg border shadow-md sm:p-8 '>
          <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>Premium plan</h5>
          <div className='flex items-baseline text-gray-900 dark:text-white'>
            <span className='text-3xl font-semibold'>$</span>
            <span className='text-5xl font-extrabold tracking-tight'>149</span>
            <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>/month</span>
          </div>
          {/* <!-- List --> */}
          <ul role='list' className='my-7 space-y-5'>
            <li className='flex space-x-3'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-teal-600 dark:text-teal-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                2 team members
              </span>
            </li>
            <li className='flex space-x-3'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-teal-600 dark:text-teal-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                20GB Cloud storage
              </span>
            </li>
            <li className='flex space-x-3'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-teal-600 dark:text-teal-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                Integration help
              </span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>Sketch Files</span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>API Access</span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>
                Complete documentation
              </span>
            </li>
            <li className='flex space-x-3 line-through decoration-gray-500'>
              {/* <!-- Icon --> */}
              <svg
                aria-hidden='true'
                className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Check icon</title>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='text-base font-normal leading-tight text-gray-500'>
                24×7 phone &amp; email support
              </span>
            </li>
          </ul>
          <button
            type='button'
            className='text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'
          >
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
}
