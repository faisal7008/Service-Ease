import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProject,
  getProjects,
} from "../../features/projects/projectSlice";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import CreateProject from "../../components/projects/CreateProject";
import { FaArrowRight, FaBackward } from "react-icons/fa";

export default function Project() {
  const { projects } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  return (
    <>
      {/* <!-- Breadcrumb --> */}
      <div className="top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:block dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          <ol
            className="ml-3 flex items-center whitespace-nowrap min-w-0"
            aria-label="Breadcrumb"
          >
            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
              Service@Ease
              <svg
                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
              aria-current="page"
            >
              Projects
            </li>
          </ol>
        </div>
      </div>
      {/* <!-- End Breadcrumb --> */}
      <main className="grid min-w-[140vh] place-content-center m-4">
        <div className="flex min-w-[140vh] justify-between">
          <h1 className="text-2xl text-slate-800 font-semibold mb-6">
            Your projects
          </h1>
          <div>
            <button
              data-hs-overlay="#hs-vertically-centered-modal"
              className="px-4 py-2 text-white bg-teal-600 hover:bg-teal-700 rounded text-sm"
            >
              Create new project
            </button>
          </div>
        </div>
        <div className="flex max-w-6xl justify-center">
          <div className="grid grid-cols-3 gap-3">
            {projects.map((project) => (
              <div
                key={project._id}
                className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                      Project subtitle
                    </p>
                  </div>
                  <div className="hs-dropdown">
                    <button
                      id="hs-dropdown-custom-icon-trigger"
                      type="button"
                      className="hs-dropdown-toggle align-middle px-1 py-2 rounded-md hover:bg-gray-100 hover:border transition-all text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      </svg>
                    </button>

                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-none min-w-[6rem] border rounded-lg dark:bg-gray-800 dark:border dark:border-gray-700"
                      aria-labelledby="hs-dropdown-custom-icon-trigger"
                    >
                      <button
                        onClick={() => dispatch(deleteProject(project._id))}
                        className="flex w-full justify-center items-center gap-2 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                      >
                        <BsTrash />
                        delete
                      </button>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-gray-800 dark:text-gray-400">
                  {project.desc}
                </p>
                <Link
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-teal-500 hover:text-teal-700"
                  to={`${project._id}`}
                >
                  Check out <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <CreateProject />
      </main>
    </>
  );
}
