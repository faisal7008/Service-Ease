import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { getIssues, reset } from "../../features/issues/issueSlice";
import moment from 'moment'
import projectService from "../../features/projects/projectService";
import TaskSidebar from "../../components/issues/TaskSidebar";
import { getAllUsers } from "../../features/users/userSlice";
import CreateIssue from "../../components/issues/CreateIssue";
import { AiOutlineRight } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import UserBox from "../../components/issues/UserBox";

export default function AllTasks() {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth)
  const {users} = useSelector(state => state.users)
  const {issues, isSuccess} = useSelector(state => state.issues)
  const [myIssues, setMyIssues] = useState([])
  const {projectId} = useParams()
  const [issue, setIssue] = useState({})
  // console.log(issue)
  const [project, setProject] = useState({})
  const managerIssues = issues.filter(issue => issue.creator_id === user._id)
  const employeeIssues = issues.filter(issue => issue.assignee_id === user._id)

  useEffect(() => {
    projectService.getProject(projectId, user.token).then(res => setProject(res)).catch(err => console.log(err))
  }, [projectId])

  useEffect(() => {
    dispatch(getIssues(projectId));

    if(user.role === "Manager"){
      const currentIssues = issues.filter(issue => issue.creator_id === user._id)
      setMyIssues(currentIssues)
    }
    else if(user.role === "Employee"){
      const currentIssues = issues.filter(issue => issue.assignee_id === user._id)
      setMyIssues(currentIssues)
    }
  }, [user,projectId, dispatch,  isSuccess])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  
  const members =  users.filter(user => project.members?.includes(user._id))
  return (
    <div><div className="max-w-full mx-8 my-4">
    <h1 className="my-4 text-xl font-semibold capitalize">{project.key} board</h1>
    <div className="flex gap-2 mt-3 mb-6">
      <h1 className=" text-md font-mono font-medium">members:</h1>
      <div className="flex -space-x-2">
        {members?.map((member) => (
              <img
                key={member._id}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-300"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              /> 
        ))}
         <div className="hs-dropdown relative inline-flex [--placement:right-top]">
        <button id="hs-dropdown-avatar-more" className="hs-dropdown-toggle inline-flex items-center justify-center h-[2rem] w-[2rem] rounded-full bg-gray-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-teal-100 focus:text-teal-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-white focus:ring-teal-600 transition-all text-sm">
            <span className="font-medium leading-none"><AiOutlineRight/></span>
          </button>
          <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-max hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 min-w-[13rem] bg-white shadow-none border rounded-lg p-1">
            {members.map((member) => (
            <button type="button" key={member._id} className="flex items-center w-full gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100">
             <UserBox user={member}/>
            </button>
            
        ))}
        </div>
      </div>
      </div>
    </div>
    <div className="flex gap-6 justify-center">
      <div className="block w-80 p-3 bg-gray-100 rounded-md shadow-none">
        <div className=" flex justify-between mt-1 mb-3">
          <h1 className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 uppercase">
              To do <span className="py-1 px-2 rounded-full text-xs font-medium bg-red-200 text-red-800">6</span>
          </h1>
          <button data-hs-overlay="#create-issue" className=" text-gray-600 hover:text-gray-800">
              <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className=" grid grid-cols-1 gap-2">
          {user.role === "Manager" && managerIssues?.filter(issue => issue.status === "To Do").map(issue => (
            // <Draggable>
          <Link to={issue._id} key={issue._id} onClick={() => setIssue(issue)} className="block min-w-full cursor-pointer p-3 bg-white border border-gray-200 rounded shadow-sm shadow-gray-300 hover:bg-gray-200" data-hs-overlay="#hs-vertically-centered-modal">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium  text-gray-500 truncate">
                  Due on
                </p>
                <p className="text-sm text-gray-900 truncate">{moment(issue.duedate).format("MMM DD")}</p>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Neil image"
                />
              </div>
            </div>
            <div className="flex pt-2 font-mono text-sm items-center">
              {issue.summary}
            </div>
          </Link>
          // </Draggable>
          ))}
          {user.role === "Employee" && employeeIssues?.filter(issue => issue.status === "To Do").map(issue => (
            // <Draggable>
          <Link to={issue._id} key={issue._id} onClick={() => setIssue(issue)} className="block min-w-full cursor-pointer p-3 bg-white border border-gray-200 rounded shadow-sm shadow-gray-300 hover:bg-gray-200" data-hs-overlay="#hs-vertically-centered-modal">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium  text-gray-500 truncate">
                  Due on
                </p>
                <p className="text-sm text-gray-900 truncate">{moment(issue.duedate).format("MMM DD")}</p>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Neil image"
                />
              </div>
            </div>
            <div className="flex pt-2 font-mono text-sm items-center">
              {issue.summary}
            </div>
          </Link>
          // </Draggable>
          ))}
        </div>
      </div>
      <div className="block w-80 p-3 bg-gray-100 rounded-md shadow-none">
      <div className=" flex justify-between mt-1 mb-3">
          <h1 className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 uppercase">
              In Progress <span className="py-1 px-2 rounded-full text-xs font-medium bg-amber-200 text-amber-800">3</span>
          </h1>
          <button className=" text-yellow-500 hover:text-yellow-600">
              <BiTime size={20}/>
          </button>
        </div>
        <div className=" grid grid-cols-1 gap-2">
        {myIssues?.filter(issue => issue.status === "In Progress").map(issue => (
          <Link to={issue._id} key={issue._id} onClick={() => setIssue(issue)} className="block min-w-full cursor-pointer p-3 bg-white border border-gray-200 rounded shadow-sm shadow-gray-300 hover:bg-gray-200" data-hs-overlay="#hs-vertically-centered-modal">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium  text-gray-500 truncate">
                  Due on
                </p>
                <p className="text-sm text-gray-900 truncate">{moment(issue.duedate).format("MMM DD")}</p>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Neil image"
                />
              </div>
            </div>
            <div className="flex pt-2 font-mono text-sm items-center">
              {issue.summary}
            </div>
          </Link>
          ))}
        </div>
      </div>
      <div className="block w-80 p-3 bg-gray-100 rounded-md shadow-none">
      <div className=" flex justify-between mt-1 mb-3">
          <h1 className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 uppercase">
              Done <span className=" py-1 px-2 rounded-full text-xs font-medium bg-green-200 text-green-800">4</span>
          </h1>
          <button className=" text-teal-600 hover:text-teal-700">
              <i className="fas fa-check"></i>
          </button>
        </div>
        <div className=" grid grid-cols-1 gap-2">
        {myIssues?.filter(issue => issue.status === "Done").map(issue => (
          <Link to={issue._id} key={issue._id} onClick={() => setIssue(issue)} className="block min-w-full cursor-pointer p-3 bg-white border border-gray-200 rounded shadow-sm shadow-gray-300 hover:bg-gray-200" data-hs-overlay="#hs-vertically-centered-modal">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium  text-gray-500 truncate">
                  Due on
                </p>
                <p className="text-sm text-gray-900 truncate">{moment(issue.duedate).format("MMM DD")}</p>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Neil image"
                />
              </div>
            </div>
            <div className="flex pt-2 font-mono text-sm items-center">
              {issue.summary}
            </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
  <Outlet context={[issue, project]}/>
  </div>
  )
}
