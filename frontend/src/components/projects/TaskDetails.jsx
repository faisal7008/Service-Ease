import React from 'react'

export default function TaskDetails() {
  return (
    <div>
        <div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="border rounded overflow-hidden dark:border-gray-700">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              
              <th scope="col" colSpan={2} class="px-6 py-3 text-left text-sm font-medium text-gray-900 capitalize dark:text-gray-400">Details</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
            <th scope="row" class="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize dark:text-gray-400">Assignee</th>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
              <img class="inline-block h-6 w-6 mr-2 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
                John Brown</td>
            </tr>
            <tr>
            <th scope="row" class="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize dark:text-gray-400">Reporter</th>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
              <img class="inline-block h-6 w-6 mr-2 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
                John Brown</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
