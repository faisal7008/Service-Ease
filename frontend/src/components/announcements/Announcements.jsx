import React from "react";

export default function Announcements() {
  return (
    <div className="h-full w-full bg-slate-50 shadow-slate-300 shadow-inner">
      <div className="flex justify-end">
        <div data-dial-init className="absolute m-5 bottom-0 group">
          <div
            id="speed-dial-menu-dropdown-alternative"
            className="flex hidden flex-col justify-end py-1 mb-4 space-y-2 bg-white rounded-lg border border-gray-100 shadow-sm dark:bg-gray-700 dark:border-gray-600"
          >
            <ul className="text-sm text-gray-500 dark:text-gray-300">
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 px-5 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white dark:border-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm font-medium">New post</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 px-5 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white dark:border-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                  </svg>
                  <span className="text-sm font-medium">New topic</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm font-medium">Add comment</span>
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            data-dial-toggle="speed-dial-menu-dropdown-alternative"
            aria-controls="speed-dial-menu-dropdown-alternative"
            aria-expanded="false"
            className="flex justify-center items-center ml-auto w-14 h-14 text-white bg-teal-700 rounded-full hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 focus:outline-none dark:focus:ring-teal-800"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
            <span className="sr-only">Open actions menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}
