import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { getIssues, reset } from "../../features/issues/issueSlice";
import moment from "moment";
import projectService from "../../features/projects/projectService";
import TaskSidebar from "../../components/issues/TaskSidebar";
import { getAllUsers } from "../../features/users/userSlice";
import CreateIssue from "../../components/issues/CreateIssue";
import { AiOutlineRight } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import UserBox from "../../components/issues/UserBox";
import { Avatar, Tooltip } from "@material-tailwind/react";
import KanbanCard from "./KanbanCard";
import { FaCheck, FaClock, FaPlus } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
const pic =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";

export default function AllTasks() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const { issues, isSuccess } = useSelector((state) => state.issues);
  const { projectId } = useParams();
  const [issue, setIssue] = useState({});
  const [project, setProject] = useState({});
  let currentIssues = [];
  if (user.role === "Manager") {
    currentIssues = issues?.filter((issue) => issue?.creator_id === user._id);
  } else if (user.role === "Employee") {
    currentIssues = issues?.filter((issue) => issue?.assignee_id === user._id);
  }
  const todo_issues = currentIssues?.filter(
    (issue) => issue?.status === "To Do"
  );
  const inprogress_issues = currentIssues?.filter(
    (issue) => issue?.status === "In Progress"
  );
  const done_issues = currentIssues?.filter(
    (issue) => issue?.status === "Done"
  );

  useEffect(() => {
    projectService
      .getProject(projectId, user.token)
      .then((res) => setProject(res))
      .catch((err) => console.log(err));
  }, [projectId]);

  useEffect(() => {
    dispatch(getIssues(projectId));

    // if(user.role === "Manager"){
    //   const currentIssues = issues.filter(issue => issue?.creator_id === user._id)
    //   setMyIssues(currentIssues)
    // }
    // else if(user.role === "Employee"){
    //   const currentIssues = issues.filter(issue => issue?.assignee_id === user._id)
    //   setMyIssues(currentIssues)
    // }
  }, [user, projectId, dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const members = users.filter((user) => project.members?.includes(user._id));
  return (
    <div className="bg-white w-full h-full overflow-x-auto">
      <div className="max-w-full mx-5 lg:mx-8 lg:my-4">
        <div className="mt-4 lg:mt-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold capitalize">
            {project.key} board
          </h1>
          <div className="flex md:hidden -space-x-2">
            {members?.map((member, key) => (
              <Tooltip
                key={member._id}
                className="bg-slate-900"
                content={member.name}
              >
                <Avatar
                  src={pic}
                  alt={"project member"}
                  // size="xs"
                  //  variant="circular"
                  className={`cursor-pointer border-2 h-8 w-8 rounded-full border-white ${
                    key === 0 ? "" : "-ml-2.5"
                  }`}
                />
              </Tooltip>
            ))}
            <div className="hs-dropdown relative inline-flex [--placement:right-top]">
              <button
                id="hs-dropdown-avatar-more"
                className="hs-dropdown-toggle inline-flex items-center justify-center h-[2rem] w-[2rem] rounded-full bg-gray-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-teal-100 focus:text-teal-600 focus:ring-2 focus:ring-offset-0 focus:ring-offset-white focus:ring-teal-600 transition-all text-sm"
              >
                <span className="font-medium leading-none">
                  <AiOutlineRight />
                </span>
              </button>
              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-max hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 min-w-[13rem] bg-white shadow-none border rounded-lg p-1">
                {members.map((member) => (
                  <button
                    type="button"
                    key={member._id}
                    className="flex items-center w-full gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                  >
                    <UserBox user={member} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:gap-6">
          {/* <h1 className=" text-md font-mono font-medium">members:</h1> */}
          <div className=" grow max-w-md flex justify-start items-center py-4 relative">
            <input
              className="py-2 px-4 block w-full border-gray-200 shadow-sm rounded text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500"
              type="text"
              placeholder="Search"
            />
            <svg
              className="absolute right-3 z-10 cursor-pointer"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                stroke="#4B5563"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L15 15"
                stroke="#4B5563"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="hidden md:flex -space-x-2">
            {members?.map((member, key) => (
              <Tooltip
                key={member._id}
                className="bg-slate-900"
                content={member.name}
              >
                <Avatar
                  src={pic}
                  alt={"project member"}
                  // size="xs"
                  //  variant="circular"
                  className={`cursor-pointer border-2 h-8 w-8 rounded-full border-white ${
                    key === 0 ? "" : "-ml-2.5"
                  }`}
                />
              </Tooltip>
            ))}
            <div className="hs-dropdown relative inline-flex [--placement:right-top]">
              <button
                id="hs-dropdown-avatar-more"
                className="hs-dropdown-toggle inline-flex items-center justify-center h-[2rem] w-[2rem] rounded-full bg-gray-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-teal-100 focus:text-teal-600 focus:ring-2 focus:ring-offset-0 focus:ring-offset-white focus:ring-teal-600 transition-all text-sm"
              >
                <span className="font-medium leading-none">
                  <AiOutlineRight />
                </span>
              </button>
              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-max hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 min-w-[13rem] bg-white shadow-none border rounded-lg p-1">
                {members.map((member) => (
                  <button
                    type="button"
                    key={member._id}
                    className="flex items-center w-full gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100"
                  >
                    <UserBox user={member} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 w-full overflow-x-auto justify-left">
          <KanbanCard
            title={"To Do"}
            issues={todo_issues}
            setIssue={setIssue}
            Icon={<FaPlus />}
            iconColor={"gray"}
            color={"red"}
          />
          <KanbanCard
            title={"In Progress"}
            issues={inprogress_issues}
            setIssue={setIssue}
            Icon={<BiTime size={20} />}
            iconColor={"yellow"}
            color={"amber"}
          />
          <KanbanCard
            title={"Done"}
            issues={done_issues}
            setIssue={setIssue}
            Icon={<FaCheck />}
            iconColor={"teal"}
            color={"green"}
          />
        </div>
      </div>
      {issue && <Outlet context={[issue, project]} />}
    </div>
  );
}
