import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIssue, reset } from "../../features/issues/issueSlice";
import { createNotification } from "../../features/notifications/notificationSlice";

export default function StatusBox({issue}) {
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.issues)
    const [current, setCurrent] = useState(issue?.status)
    const statusArray = ["To Do", "In Progress", "Done"]
    const notificationData = {
      toUser: issue.creator_id,
      fromUser: issue.assignee_id,
      message: `Issue - ${issue.summary} is done`
    }

    useEffect(() => {
      setCurrent(issue.status)
    }, [issue])

    useEffect(() => {
      dispatch(reset())
    }, [current])
 
  return (
    <div className="status inline-flex items-center gap-2 hs-dropdown">
      { current === "To Do" && <button
        id="hs-dropdown-default"
        className="hs-dropdown-toggle font-semibold  focus:ring-4 focus:outline-none hover:bg-gray-300 rounded text-xs px-4 py-2 text-center inline-flex items-center uppercase text-gray-900 bg-gray-300 focus:ring-gray-200"
        type="button"
      >
        {current}{" "}
        <svg
          className="ml-2 w-4 h-4"
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
      </button>}
      { current === "In Progress" && <button
        id="hs-dropdown-default"
        className="hs-dropdown-toggle font-semibold focus:ring-4 focus:outline-none rounded text-xs px-4 py-2 text-center inline-flex items-center uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
        type="button"
      >
        {current}{" "}
        <svg
          className="ml-2 w-4 h-4"
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
      </button>}
      { current === "Done" && <button
        id="hs-dropdown-default"
        className="hs-dropdown-toggle font-semibold text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded text-xs px-4 py-2 text-center inline-flex items-center uppercase"
        type="button"
        onClick={() => dispatch(createNotification(notificationData))}
      >
        {current}{" "}
        <svg
          className="ml-2 w-4 h-4"
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
      </button>}
      {/* {isLoading ? <div class="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div> : <></>} */}
      {/* <!-- Dropdown menu --> */}
      <div
        className="hs-dropdown-menu hidden transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        aria-labelledby="hs-dropdown-default"
      >
        <ul className="py-1 text-xs font-medium text-gray-700 dark:text-gray-200">
          {statusArray.filter(status => status !== current).map(status => ( 
          <li key={status} onClick={() => setCurrent(status)}>
            <a
              onClick={() =>
                dispatch(
                  updateIssue({
                    IssueId: issue._id,
                    IssueData: { status: status },
                  })
                )
              }
              className="block py-2 px-4 uppercase border-l-2 hover:border-blue-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {status === "To Do" && (
          <span className="px-2 py-1 text-gray-800 rounded-sm bg-gray-300">
            To do{" "}
          </span>
        )}
        {status === "In Progress" && (
          <span className="px-2 py-1 text-blue-700 rounded-sm bg-blue-200">
            In progress{" "}
          </span>
        )}
        {status === "Done" && (
          <span className="px-2 py-1 text-green-700 rounded-sm bg-green-200">
            done{" "}
          </span>
        )}
            </a>
          </li>))}
        </ul>
      </div>
    </div>
  );
}
