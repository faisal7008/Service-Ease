import React from "react";
import IssueDetails from "../../components/projects/IssueDetails";

export default function ManagerProjects() {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl flex justify-between py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight inline-flex items-center text-gray-900">
            Projects
            <svg
              class="flex-shrink-0 h-8 w-8 text-gray-400 dark:text-gray-600 mx-2 "
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                stroke-linecap="round"
              />
            </svg>
            <h1 className="text-xl font-semibold tracking-tight text-gray-700">
              Service@Ease Engagement Platform
            </h1>
          </h1>
          {/* <!-- Modal toggle --> */}
<button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
  Toggle modal
</button>
        </div>
      </header>
      <main className="min-h-[calc(100vh-70px)] flex justify-center">
        <div className="max-w-7xl p-4">
          <div className=" flex gap-2 mt-2 mb-4">
            <h1 className=" text-md font-mono font-medium">members:</h1>
            <div class="flex -space-x-2">
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-gray-300"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-gray-300"
                src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-gray-300"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                alt="Image Description"
              />
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-gray-300"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <div class="hs-dropdown relative inline-flex [--placement:top-left]">
                <button
                  id="hs-dropdown-avatar-more"
                  class="hs-dropdown-toggle inline-flex items-center justify-center h-8 w-8 rounded-full border-2 border-white font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-blue-100 focus:text-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-blue-600 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:bg-blue-100 dark:focus:text-blue-600 dark:focus:ring-offset-gray-800"
                >
                  <span class="font-medium leading-none">9+</span>
                </button>

                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-72 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700">
                  <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Chris Lynch
                  </a>
                  <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Maria Guan
                  </a>
                  <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Amil Evara
                  </a>
                  <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    Ebele Egbuna
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 justify-center">
            <div className="block w-80 p-3 bg-gray-100 rounded-md shadow-none">
              <div className=" flex justify-between mt-1 mb-3">
                <h1 className=" text-sm font-semibold text-gray-700 uppercase">
                    To do
                </h1>
                <button className=" text-gray-600 hover:text-gray-800">
                    <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className=" grid grid-cols-1 gap-2">
                <div className="block min-w-full p-3 bg-white border border-gray-200 rounded-none shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-medium  text-gray-500 truncate">
                        Due on
                      </p>
                      <p class="text-sm text-gray-900 truncate">Jul 07</p>
                    </div>
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Neil image"
                      />
                    </div>
                  </div>
                  <div className="flex pt-2 font-mono text-sm items-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Pariatur, maxime!
                  </div>
                </div>
                <div className="block min-w-full p-3 bg-white border border-gray-200 rounded-none shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-medium  text-gray-500 truncate">
                        Due on
                      </p>
                      <p class="text-sm text-gray-900 truncate">Jul 07</p>
                    </div>
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Neil image"
                      />
                    </div>
                  </div>
                  <div className="flex pt-2 font-mono text-sm items-center">
                    Delete direct message bug
                  </div>
                </div>
              </div>
            </div>
            <div className="block w-80 p-3 bg-gray-100 rounded-md shadow-none">
            <div className=" flex justify-between mt-1 mb-3">
                <h1 className=" text-sm font-semibold text-gray-700 uppercase">
                    In Progress
                </h1>
                <button className=" text-gray-600 hover:text-gray-800">
                    <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className=" grid grid-cols-1 gap-2">
                <div className="block min-w-full p-3 bg-white border border-gray-200 rounded-none shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-medium  text-gray-500 truncate">
                        Due on
                      </p>
                      <p class="text-sm text-gray-900 truncate">Jul 07</p>
                    </div>
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Neil image"
                      />
                    </div>
                  </div>
                  <div className="flex pt-2 font-mono text-sm items-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Pariatur, maxime!
                  </div>
                </div>
                <div className="block min-w-full p-3 bg-white border border-gray-200 rounded-none shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-medium  text-gray-500 truncate">
                        Due on
                      </p>
                      <p class="text-sm text-gray-900 truncate">Jul 07</p>
                    </div>
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Neil image"
                      />
                    </div>
                  </div>
                  <div className="flex pt-2 font-mono text-sm items-center">
                    Delete direct message bug
                  </div>
                </div>
              </div>
            </div>
            <div className="block w-80 p-3 bg-gray-100 rounded-md shadow-none">
            <div className=" flex justify-between mt-1 mb-3">
                <h1 className=" text-sm font-semibold text-gray-700 uppercase">
                    Done
                </h1>
                <button className=" text-teal-600 hover:text-teal-700">
                    <i className="fas fa-check"></i>
                </button>
              </div>
              <div className=" grid grid-cols-1 gap-2">
                <div className="block min-w-full p-3 bg-white border border-gray-200 rounded-none shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-medium  text-gray-500 truncate">
                        Due on
                      </p>
                      <p class="text-sm text-gray-900 truncate">Jul 07</p>
                    </div>
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Neil image"
                      />
                    </div>
                  </div>
                  <div className="flex pt-2 font-mono text-sm items-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Pariatur, maxime!
                  </div>
                </div>
                <div className="block min-w-full p-3 bg-white border border-gray-200 rounded-none shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-medium  text-gray-500 truncate">
                        Due on
                      </p>
                      <p class="text-sm text-gray-900 truncate">Jul 07</p>
                    </div>
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Neil image"
                      />
                    </div>
                  </div>
                  <div className="flex pt-2 font-mono text-sm items-center">
                    Delete direct message bug
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <IssueDetails/>
    </div>
  );
}
