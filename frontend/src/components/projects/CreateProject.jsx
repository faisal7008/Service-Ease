import { useEffect } from 'react'
import { useState } from 'react'
import {FaFolderPlus, FaTimes} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { createProject } from '../../features/projects/projectSlice'
import {getAllUsers} from "../../features/users/userSlice"
import SearchUsers from './SearchUsers'

export default function CreateProject() {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth)
  const {users} = useSelector(state => state.users)
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  // const [createdBy, setCreatedBy] = useState("")
  const [key, setKey] = useState("")
  const [members, setMembers] = useState([])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])
   
  const handleSubmit = (e) => {
    e.preventDefault()
    if(members.length <= 0){
      console.log("please add team members")
      return
    }
    const createdBy = user._id
    const admins = [user]
    users.filter(user => user.role === "Leader").map((user) => admins.push(user))
    const projectData = {name, desc, createdBy, key, members, admins}
    // console.log(projectData)
    dispatch(createProject(projectData))
  }

  const [searchField, setSearchField] = useState("");

  const filteredUsers = users.filter(
    user => {
      return (
        searchField && ((user.role === "Employee" && !(members.includes(user))) &&
        user.name.toLowerCase().includes(searchField.toLowerCase()))
      );
    }
  );


  return (
    <div>
        <div id="hs-vertically-centered-modal" className="hs-overlay hidden w-full h-full fixed -top-5 left-0 z-[60] overflow-x-hidden overflow-y-auto">
  <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-full sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex justify-center items-center">
    <div className="relative flex p-6 flex-col max-h-[95vh] w-2/5 bg-white border shadow-sm rounded h-5/6">
        <div className='flex justify-between mb-4'>
            <h1 className='font-semibold tracking-wide text-slate-800 text-xl'>Add project details</h1>     
            <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
      <div className="mb-4">
         <label for="title" className="block mb-2 text-xs font-semibold text-gray-900 dark:text-white">Project title <span className=' text-rose-600'>*</span></label>
         <input type="text" id="title" onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" placeholder="Project title" required />
      </div>
      <div className="mb-4">
         <label for="description" className="block mb-2 text-xs font-semibold text-gray-900 dark:text-white">Project description <span className=' text-rose-600'>*</span></label>
         <textarea id="description" onChange={(e) => setDesc(e.target.value)} rows="4" className="block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-teal-500 focus:border-teal-500" placeholder="Write project description..."></textarea>
      </div>
      <div className="mb-4">
         <label for="key" className="block mb-2 text-xs font-semibold text-gray-900 dark:text-white">Project Key <span className=' text-rose-600'>*</span></label>
         <input type="text" onChange={(e) => setKey(e.target.value)} id="key" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" placeholder="Write a unique key for your project" required />
      </div>
      <div className="mb-4 hs-dropdown space-y-2">
         <label for="team" className="mb-2 text-xs font-semibold text-gray-900 dark:text-white">Add team members <span className=' text-rose-600'>*</span></label>
         <div className="relative hs-dropdown-toggle" tabIndex={0} id="hs-dropdown-with-icons">
            <input type="search" onChange={(e) => setSearchField(e.target.value)} id="team" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-teal-500 focus:border-teal-500" placeholder="Add team members" autoComplete='off'/>
         </div>
      <SearchUsers setSearchField={setSearchField} setMembers={setMembers} filteredUsers={filteredUsers} />
      </div>
      <div className="mb-4 h-full w-full grid grid-cols-2 gap-2 place-content-evenly">
        {members.map(member => (
        <div key={member._id} className="flex justify-between border px-2 py-1.5 bg-gray-200 rounded items-center w-full">
          <div className='inline-flex items-center space-x-2'>
            <img
              className="w-7 h-7 rounded-full"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Neil image"
            />
            <p className="text-sm font-semibold text-gray-900 truncate ">
              {member.name}
            </p>
            </div>
            <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center" onClick={() => setMembers(prev => prev.filter(user => user._id !== member._id))}
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
                <span className="sr-only">remove member</span>
            </button>
        </div>))}

      </div>
      <button type="submit" className="text-white inline-flex justify-center items-center bg-teal-700 hover:bg-teal-800 w-full focus:ring-4 focus:ring-teal-300 font-medium rounded text-sm px-5 py-2.5 mr-2"><span className='mr-2'><FaFolderPlus size={18}/></span> Create project</button>
   </form>
    </div>
  </div>
</div>
    </div>
  )
}
