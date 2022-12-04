import React, { useState } from "react";
import { useEffect } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateIssue } from "../../features/issues/issueSlice";

export default function PriorityBox({issue}) {
    const dispatch = useDispatch()
    const [current, setCurrent] = useState(issue?.priority)
    // console.log(issue?.priority);
    console.log(current)
    const priorityArray = ["High", "Low", "Medium"]

    useEffect(() => {
      setCurrent(issue.priority)
    }, [issue])

  return (
    <div className="priority hs-dropdown">
      <button
        id="hs-dropdown-default"
        type="button"
        className="hs-dropdown-toggle bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded text-xs px-4 py-2 text-center inline-flex items-center gap-2 uppercase transition-all"
      >
        {current === "High" && (
          <span className="text-rose-600 inline-flex items-center gap-2">
            <BsFillCircleFill /> High{" "}
          </span>
        )}
        {current === "Medium" && (
          <span className="text-yellow-500 inline-flex items-center gap-2">
            <BsFillCircleFill /> Medium{" "}
          </span>
        )}
        {current === "Low" && (
          <span className="text-green-600 inline-flex items-center gap-2">
            <BsFillCircleFill /> Low{" "}
          </span>
        )}
        <svg
          className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        className="hs-dropdown-menu hidden transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        aria-labelledby="hs-dropdown-default"
      >
        <ul className="py-1 text-xs text-gray-700 dark:text-gray-200">
          {priorityArray.filter(priority => priority !== current).map(priority => ( 
          <li onClick={() => setCurrent(priority)}>
            <a
              onClick={() =>
                dispatch(
                  updateIssue({
                    IssueId: issue._id,
                    IssueData: { priority: priority },
                  })
                )
              }
              className="block py-2 px-4 uppercase hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {priority === "High" && (
                <span className="text-rose-600 inline-flex items-center gap-2">
                  <BsFillCircleFill /> High{" "}
                </span>
              )}
              {priority === "Medium" && (
                <span className="text-yellow-500 inline-flex items-center gap-2">
                  <BsFillCircleFill /> Medium{" "}
                </span>
              )}
              {priority === "Low" && (
                <span className="text-green-600 inline-flex items-center gap-2">
                  <BsFillCircleFill /> Low{" "}
                </span>
        )}
            </a>
          </li>))}
        </ul>
      </div>
    </div>
  );
}
