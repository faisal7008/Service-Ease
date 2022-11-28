import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getProjects} from "../../features/projects/projectSlice"
import {Link} from "react-router-dom"
import Task from "./Task";
import CreateProject from "../../components/projects/CreateProject";


export default function Project() {
  const {projects} = useSelector(state => state.projects)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProjects())
  }, [])
  return (
    <main className="grid place-content-center m-4">
      <div className="flex justify-between">
      <h1 className="text-2xl text-slate-800 font-semibold mb-6">
        Your projects
      </h1>
      <div>
      <button data-hs-overlay="#hs-vertically-centered-modal" className="px-4 py-2 text-white bg-teal-600 hover:bg-teal-700 rounded text-sm">
          Create new project
      </button>
      </div>
      </div>
      <div className="flex max-w-6xl justify-center">
        <div className="grid grid-cols-3 gap-3">
          {projects.map((project) => (
          <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {project.name}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
              Project subtitle
            </p>
            <p className="mt-2 text-gray-800 dark:text-gray-400">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-700"
              to={`${project._id}`}
            >
              Project link
            </Link>
          </div>
          ))}
        </div>
      </div>
      <CreateProject/>
    </main>
  );
}
