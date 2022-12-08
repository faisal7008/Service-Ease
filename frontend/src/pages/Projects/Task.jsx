import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import projectService from "../../features/projects/projectService";
import TaskSidebar from "../../components/issues/TaskSidebar";
import CreateIssue from "../../components/issues/CreateIssue";
import AllTasks from "../../components/issues/AllTasks";
import ProjectSettings from "../../components/projects/ProjectSettings"
import { getProjects } from "../../features/projects/projectSlice";

export default function Task() {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth)
  const {projectId} = useParams()
  const [project, setProject] = useState({})
  const {projects, isSuccess, isLoading, isError} = useSelector(state => state.projects)
  const [current, setCurrent] = useState("Board")

  useEffect(() => {
    dispatch(getProjects())
  }, [isSuccess])

  useEffect(() => {
    // projectService.getProject(projectId, user.token).then(res => setProject(res)).catch(err => console.log(err))
    projects.filter(project => project._id === projectId).map(project => setProject(project))
  }, [projectId, isSuccess, isLoading, isError])


  return (
    <>
     {/* <!-- Breadcrumb --> */}
    {/* <div className="top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:block dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center py-4">
        <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
          <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
            Projects
            <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </li>
          <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
            {project.name}
          </li>
        </ol>
      </div>
    </div> */}
      {/* <!-- End Breadcrumb --> */}
    <div className="flex min-h-[91vh]">
      <div className="w-1/5 border-r-[1px] bg-gray-100 border-gray-200">
        <TaskSidebar project={project} current={current} setCurrent={setCurrent}/>
      </div>
      <main className="flex w-4/5 justify-left">
        {/* <AllTasks /> */}
        {current === "Board" && <AllTasks/>}
        {current === "Settings" && <ProjectSettings project={project}/>}
      </main>
      {/* <IssueDetails issue={issue}/> */}
      <CreateIssue project={project} />
      
    </div></>
  );
}
