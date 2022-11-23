import DescriptionBox from "./DescriptionBox";
import CommentBox from "./CommentBox";
import TaskDetails from "./TaskDetails";

export default function IssueDetails() {
  return (
    <div>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full max-w-6xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white p-6 rounded-md shadow">
            {/* <!-- Modal header --> */}
            <div class="flex justify-between items-start mb-4 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-500 dark:text-white">
                Project Name
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="relative flex gap-6">
              <div className=" space-y-2 p-2 w-4/6 ">
                <h1 className=" font-semibold text-xl">
                    Summary
                </h1>
                <button className=" text-xs font-medium bg-slate-200 px-3 py-2 rounded hover:bg-slate-300">
                <i class="fas fa-paperclip fa-lg"></i>{" "}Attach files
                </button>
                <div className="description">
                    <h1 className=" mt-4 mb-1 font-semibold text-sm">
                        Description
                    </h1> 
                    <DescriptionBox />
                </div>
                <div className="activity">
                    <h1 className=" mt-8 mb-1 font-semibold text-sm">
                        Activity
                    </h1>
                    <div className="mb-3 inline-flex items-center gap-3"> 
                    <h1 className=" font-normal text-sm">
                        Show:
                    </h1>
                    <button className=" text-sm font-medium bg-slate-200 px-2 py-1 rounded hover:bg-slate-300">
                        All
                    </button>

                    <button className=" text-sm font-medium bg-slate-200 px-2 py-1 rounded hover:bg-slate-300">
                        Comments
                    </button>
                    </div> 
                    <CommentBox />
                </div>
              </div>
              <div className=" space-y-2 p-2 w-2/6">
                <div className="status">
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-xs px-4 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">TO DO <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">IN PROGRESS</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">DONE</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="details">
                    <TaskDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
