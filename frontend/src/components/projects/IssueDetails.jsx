import DescriptionBox from "./DescriptionBox";
import CommentBox from "./CommentBox";
import TaskDetails from "./TaskDetails";
import moment from "moment";
import AllComments from "./AllComments";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getComments } from "../../features/comments/commentSlice";
import { useOutletContext, useParams } from "react-router-dom";

export default function IssueDetails() {
  const [issue] = useOutletContext()
  const {issueId} = useParams()
  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getComments(issueId))
}, [issueId])
  return (
    <div>
      {/* <!-- Main modal --> */}
      <div id="hs-vertically-centered-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-auto overflow-y-auto">
  <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-full sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex justify-center items-center">
        <div className="relative w-full max-w-6xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white p-6 rounded shadow">
            {/* <!-- Modal header --> */}
            <div class="flex justify-between items-start mb-2 dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-500 dark:text-white">
                Project Name
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-hs-overlay="#hs-vertically-centered-modal"
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
              <div className=" overflow-auto max-h-[67vh] space-y-2 p-2 w-4/6 ">
                <h1 className=" font-semibold text-xl">{issue?.summary}</h1>
                <button className=" text-xs font-medium bg-slate-200 px-3 py-2 rounded hover:bg-slate-300">
                  <i class="fas fa-paperclip fa-lg"></i> Attach files
                </button>
                <div className="description">
                  <h1 className=" mt-4 mb-1 font-semibold text-sm">
                    Description
                  </h1>
                  <DescriptionBox issue={issue} />
                </div>
                <div className="activity">
                  <h1 className=" mt-8 mb-1 font-semibold text-sm">Activity</h1>
                  <div className="mb-3 inline-flex items-center gap-3">
                    <h1 className=" font-normal text-sm">Show:</h1>
                    <button className=" text-sm font-medium bg-slate-200 px-2 py-1 rounded hover:bg-slate-300">
                      All
                    </button>
                    <button className=" text-sm font-medium text-white bg-slate-700 px-2 py-1 rounded hover:bg-slate-800">
                      Comments
                    </button>
                    <button className=" text-sm font-medium bg-slate-200 px-2 py-1 rounded hover:bg-slate-300">
                      History
                    </button>
                  </div>
                  <div className="flex space-x-1">
                    <img
                      class="inline-block h-8 w-8 mr-2 mt-1 rounded-full ring-2 ring-white dark:ring-gray-800"
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="Image Description"
                    />
                    <div className="w-full">
                      <CommentBox user={user} issue={issue}/>
                    </div>
                  </div>
                  <div className="mt-2">
                    <AllComments issue={issue}/>
                  </div>
                </div>
              </div>
              <div className=" space-y-2 p-2 w-2/6">
                <div className="status hs-dropdown">
                  <button
                    id="hs-dropdown-default"
                    class="hs-dropdown-toggle text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded text-xs px-4 py-2 text-center inline-flex items-center uppercase"
                    type="button"
                  >
                    TO DO {" "}
                    <svg
                      class="ml-2 w-4 h-4"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    class="hs-dropdown-menu hidden transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                    aria-labelledby="hs-dropdown-default"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          IN PROGRESS
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          DONE
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="details">
                  <TaskDetails issue={issue}/>
                </div>
                <div>
                  
                </div>
                <div className="timestamps absolute bottom-0 space-y-1 p-3">
                  <h1 className=" text-xs mb-6 font-normal text-gray-500">
                    Due On <span className="font-semibold text-sm">{moment().format('lll')}</span>
                  </h1>
                  <h1 className=" text-xs font-medium text-gray-500">
                    Created {moment(issue?.createdAt).startOf('day').fromNow()}
                  </h1>
                  <h1 className=" text-xs font-medium text-gray-500">
                    Updated {moment(issue?.updatedAt).startOf('day').fromNow()}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
