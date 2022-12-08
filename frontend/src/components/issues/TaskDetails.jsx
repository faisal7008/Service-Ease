import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userService from "../../features/users/userService";

export default function TaskDetails({issue}) {
  const [assignee, setAssignee] = useState()
  const [reporter, setReporter] = useState()
  const {user} = useSelector(state => state.auth)
  // console.log(issue);
  useEffect(() => {
    userService.getUser(issue?.assignee_id, user.token).then((res) => setAssignee(res)).catch((err) => console.log(err.message));
    userService.getUser(issue?.creator_id, user.token).then(res => setReporter(res)).catch(err => console.log(err.message))
    // console.log(assignee)
    // console.log(reporter)
  }, [issue, user])

  return (
    <div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded overflow-hidden dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      colSpan={2}
                      className="px-4 py-3 text-left text-sm font-medium text-gray-900 capitalize dark:text-gray-400"
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="px-4 py-4 text-left text-xs font-bold text-gray-500 capitalize dark:text-gray-400"
                    >
                      Assignee
                    </th>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      <img
                        className="inline-block h-6 w-6 mr-2 rounded-full ring-2 ring-white dark:ring-gray-800"
                        src={assignee?.profilePicture ? assignee?.profilePicture : "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"}
                        alt="Image Description"
                      />
                      {assignee?.name}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="px-4 py-4 text-left text-xs font-bold text-gray-500 capitalize dark:text-gray-400"
                    >
                      Reporter
                    </th>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      <img
                        className="inline-block h-6 w-6 mr-2 rounded-full ring-2 ring-white dark:ring-gray-800"
                        src={reporter?.profilePicture ? reporter?.profilePicture : "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"}
                        alt="Image Description"
                      />
                      {reporter?.name}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
