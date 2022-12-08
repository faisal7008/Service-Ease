import { useEffect } from 'react'
import { useState } from 'react'
import {FaFolderPlus, FaTimes} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { createProject, updateProject } from '../../features/projects/projectSlice'
import {getAllUsers} from "../../features/users/userSlice"
import SearchUsers from './SearchUsers'

export default function ProjectSettings({project}) {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth)
  const {users} = useSelector(state => state.users)
  const {isSuccess, isError, message} = useSelector(state => state.projects)
  const [name, setName] = useState(project.name)
  const [desc, setDesc] = useState(project.desc)
  const [successMsg, setSuccessMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  // const [createdBy, setCreatedBy] = useState("")
  const [key, setKey] = useState(project.key)

  const project_members = users.filter(user => project?.members?.includes(user._id))

  const [members, setMembers] = useState(project_members)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  useEffect(() => {
    setErrorMsg(message)
  }, [isError])
   
  const handleSubmit = (e) => {
    e.preventDefault()
    if(members.length <= 0){
      console.log("please add team members")
      return
    }
    const projectData = {name, desc, key, members}
    // console.log(projectData)
    dispatch(updateProject({projectId: project._id, projectData}))
    if(isSuccess){
      setSuccessMsg("Project updated successfully.")
    }
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
    <div className='flex ml-20 justify-left items-start w-full'>
      {successMsg &&
      <div className="absolute z-10 top-20 right-4">
      <div className="max-w-xs bg-green-100 border border-green-200 text-sm text-green-500 rounded-md shadow-md" role="alert">
    <div className="flex items-center p-4">
      {successMsg}

      <div className="ml-2">
        <button type="button" onClick={() => setSuccessMsg("")} className="inline-flex flex-shrink-0 justify-center items-center p-2 rounded-full text-green-400 hover:bg-green-200 transition-all text-xs">
          <span className="sr-only">Close</span>
          <svg className="w-2.5 h-2.5" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
      </div>}
    <div className="relative flex p-6 flex-col w-3/5 bg-white">
        <div className='flex justify-between mb-6'>
            <h1 className='font-semibold tracking-wide text-slate-800 text-2xl'>Project details</h1>     
        </div>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
         <label for="title" className="block mb-2 text-xs font-semibold text-gray-900 dark:text-white">Project title <span className=' text-rose-600'>*</span></label>
         <input type="text" id="title" onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" placeholder="Project title" defaultValue={project.name} required />
      </div>
      <div className="mb-4">
         <label for="description" className="block mb-2 text-xs font-semibold text-gray-900 dark:text-white">Project description <span className=' text-rose-600'>*</span></label>
         <textarea id="description" onChange={(e) => setDesc(e.target.value)} rows="4" className="block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-teal-500 focus:border-teal-500" placeholder="Write project description..." defaultValue={project.desc}></textarea>
      </div>
      <div className="mb-4">
         <label for="key" className="block mb-2 text-xs font-semibold text-gray-900 dark:text-white">Project Key <span className=' text-rose-600'>*</span></label>
         <input type="text" onChange={(e) => setKey(e.target.value)} id="key" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" placeholder="Write a unique key for your project" defaultValue={project.key} required />
      </div>
      <div className="mb-4 hs-dropdown space-y-2">
         <label for="team" className="mb-2 text-xs font-semibold text-gray-900 dark:text-white">Add team members <span className=' text-rose-600'>*</span></label>
         <div className="relative hs-dropdown-toggle" tabIndex={0} id="hs-dropdown-with-icons">
            <input type="search" onChange={(e) => setSearchField(e.target.value)} id="team" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-teal-500 focus:border-teal-500" placeholder="Search members" autoComplete='off'/>
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
      <button type="submit" className="mt-2 text-white bg-teal-700 hover:bg-teal-800 w-max focus:ring-4 focus:ring-teal-300 font-medium rounded text-sm px-8 py-2.5 mr-2"> Save</button>
   </form>
    </div>
  </div>
  )
}
