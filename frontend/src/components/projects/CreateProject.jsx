import { useEffect } from 'react'
import { useState } from 'react'
import {FaFolderPlus} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {getAllUsers} from "../../features/users/userSlice"

export default function CreateProject() {
  const dispatch = useDispatch()
  const {users} = useSelector(state => state.users)
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [key, setKey] = useState("")
  const [members, setMembers] = useState([])
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
   
  const handleSubmit = (e) => {
    e.preventDefault()
    users.filter(user => user.role !== "Employee").map((user) => console.log(user))
    const projectData = {name, desc, key, members, admins}
    console.log(projectData)
  }


  return (
    <div>
        <div id="hs-vertically-centered-modal" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
  <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
    <div className="flex p-6 flex-col w-screen bg-white border shadow-sm rounded-xl h-5/6">
        <div className='flex justify-between mb-4'>
            <h1 className='font-semibold tracking-wide text-slate-800 text-xl'>Add project details</h1>     
            <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
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
                <span className="sr-only">Close modal</span>
            </button>
        </div>
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
         <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project title</label>
         <input type="text" id="title" onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" placeholder="Project title" required />
      </div>
      <div className="mb-6">
         <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project description</label>
         <textarea id="description" onChange={(e) => setDesc(e.target.value)} rows="4" className="block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500" placeholder="Write project description..."></textarea>
      </div>
      <div className="mb-6">
         <label for="key" onChange={(e) => setKey(e.target.value)} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Key</label>
         <input type="text" id="key" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" placeholder="Write a unique key for your project" required />
      </div>
      <div className="mb-4 space-y-2">
         <label for="team" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Add team members</label>
         <div className="relative">
            <input type="search" id="team" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500" placeholder="Add team members" required />
            <button type="button" className="absolute inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-teal-700 rounded-lg right-2 bottom-2 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"><svg className="w-4 h-4 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>Add</button>
         </div>
      </div>
      <div className="mb-4 h-full w-full grid grid-cols-2 gap-2 place-content-evenly">
            <div>faisal</div>
            <div>affan</div>
            <div>aquib</div>
            <div>danish</div>
      </div>
      <button type="submit" className="text-white inline-flex justify-center items-center bg-teal-700 hover:bg-teal-800 w-full focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"><span className='mr-2'><FaFolderPlus size={18}/></span> Create project</button>
   </form>
    </div>
  </div>
</div>
    </div>
  )
}
