import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDM } from "../../features/conversations/conversationSlice";
import { getEmployees, getManagers } from "../../features/users/userSlice";

export default function AddDM({ currentUser, conversations }) {
  const dispatch = useDispatch();
  const { managers, employees } = useSelector((state) => state.users);
  const [users, setUsers] = useState([]);

  const handleCheck = (event) => {
    var users_array = [...users];
    if (event.target.checked) {
      users_array = [...users, event.target.value];
    } else {
      users_array.splice(users.indexOf(event.target.value), 1);
    }
    setUsers(users_array);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.length === 0) {
      return;
    } else {
      console.log(users);
      users.forEach(async (user) => {
        dispatch(createDM({ senderId: currentUser._id, receiverId: user }));
      });
    }
  };

  useEffect(() => {
    dispatch(getManagers());
    dispatch(getEmployees());
    console.log(users);
  }, [dispatch, users]);

  return (
    <div className="mx-1 hs-dropdown relative sm:inline-flex z-20 [--auto-close:inside]">
      <button
        id="hs-dropdown-auto-close-inside"
        className=" px-1 rounded-md hover:bg-slate-400 text-gray-600 hover:text-gray-800"
      >
        <i className="fas fa-plus"></i>
      </button>
      {/* Dropdown Menu */}
      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 bg-white shadow-md rounded-lg" aria-labelledby="hs-dropdown-auto-close-inside"
      >
        <div className="p-3">
          <label htmlFor="input-group-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-search"
              className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Search user"
            />
          </div>
        </div>
        <ul
          className="overflow-y-auto px-3 pb-3 h-48 text-sm capitalize text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownSearchButton1"
        >
          {managers
            .filter(
              (manager) =>
                manager._id !== currentUser._id &&
                !conversations.some((c) => c.members.includes(manager._id))
            )
            .map((manager) => (
              <li key={manager._id}>
                <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id={manager._id}
                    type="checkbox"
                    value={manager._id}
                    //   checked={isChecked}
                    onChange={(e) => handleCheck(e)}
                    className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={manager._id}
                    className="py-2 ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    {manager.name}
                  </label>
                </div>
              </li>
            ))}

          {employees
            .filter(
              (employee) =>
                employee._id !== currentUser._id &&
                !conversations.some((c) => c.members.includes(employee._id))
            )
            .map((employee) => (
              <li key={employee._id}>
                <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id={employee._id}
                    type="checkbox"
                    value={employee._id}
                    //   checked={isChecked}
                    onChange={(e) => handleCheck(e)}
                    className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={employee._id}
                    className="py-2 ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    {employee.name}
                  </label>
                </div>
              </li>
            ))}
        </ul>
        <a
          onClick={handleSubmit}
          className="flex justify-center items-center mx-3 mb-2 p-3 text-sm font-medium rounded-md text-white bg-teal-500 border-t border-gray-200 dark:border-gray-600 hover:bg-teal-600"
        >
          Create DM
        </a>
      </div>
    </div>
  );
}
