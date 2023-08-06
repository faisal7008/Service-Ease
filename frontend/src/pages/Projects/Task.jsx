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
import Roadmap from "../../components/issues/Roadmap";

export default function Task() {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth)
  const {projectId} = useParams()
  const [project, setProject] = useState({})
  const {projects, isSuccess, isError} = useSelector(state => state.projects)
  const [current, setCurrent] = useState("Board")

  useEffect(() => {
    dispatch(getProjects())
  }, [isSuccess])

  useEffect(() => {
    // projectService.getProject(projectId, user.token).then(res => setProject(res)).catch(err => console.log(err))
    projects.filter(project => project._id === projectId).map(project => setProject(project))
  }, [projectId, isSuccess, isError])


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
      <div className="w-1/5 hidden lg:block border-r-[1px] bg-gray-100 border-gray-200">
        <TaskSidebar project={project} current={current} setCurrent={setCurrent}/>
      </div>
      <div id="hs-overlay-example" className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full w-72 z-[60] bg-white border-r" tabindex="-1">
      <TaskSidebar project={project} current={current} setCurrent={setCurrent}/>
      </div>
      <main className="flex w-full lg:w-4/5 overflow-auto bg-white justify-left relative">
        {/* <AllTasks /> */}
        <button type="button" className="py-2 px-0 lg:hidden rounded-r-md border border-transparent font-semibold bg-slate-300 shadow-lg focus:outline-none transition-all text-sm absolute top-10 left-0 z-50" data-hs-overlay="#hs-overlay-example">
        <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</button>
        {current === "Roadmap" && <Roadmap/>}
        {current === "Board" && <AllTasks/>}
        {current === "Settings" && <ProjectSettings project={project}/>}
      </main>
      {/* <IssueDetails issue={issue}/> */}
      <CreateIssue project={project} />
      
    </div></>
  );
}
