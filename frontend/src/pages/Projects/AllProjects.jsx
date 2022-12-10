import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import company_logo from "../../utilities/data/img/logo-slack.svg";
import { getProjects } from "../../features/projects/projectSlice";

import projectsTableData from "../../utilities/data/projects-table-data";
import { useEffect } from "react";
import { getAllUsers } from "../../features/users/userSlice";
import { getAllIssues } from "../../features/issues/issueSlice";

const pic =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";

export default function AllProjects() {
  const { projects, isSuccess } = useSelector((state) => state.projects);
  const { users } = useSelector((state) => state.users);
  const { issues } = useSelector((state) => state.issues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
    dispatch(getAllUsers());
    dispatch(getAllIssues());
  }, [isSuccess]);
  
  const completion = (projectId) => {
    let currentIssues = issues.filter(issue => issue.project_id === projectId)
    let done_issues = issues.filter(issue => issue.status === "Done" && issue.project_id === projectId)
    let x = done_issues?.length
    let y = currentIssues?.length
    let completed = parseInt((x/y)*100)
    return completed ? completed : 0
  }
 

  return (
    <div>
      <div className="flex items-center ml-12 py-4">
        <ol
          className="ml-3 flex items-center whitespace-nowrap min-w-0"
          aria-label="Breadcrumb"
        >
          <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
            Leadership
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
            Projects stats
          </li>
        </ol>
      </div>
      <div className="grid p-4 justify-center">
        <div>
          <Card className="min-w-[85rem] mt-6">
            <CardHeader variant="gradient" className="mb-6 -mt-6 bg-teal-500 p-6">
              <Typography variant="h6" color="white">
                Projects Stats
              </Typography>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    {[
                      "project name",
                      "members",
                      "budget",
                      "status",
                      "completion",
                      "",
                    ].map((el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-bold uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {projects?.map(
                    (project, key) => {
                      const className = `py-3 px-5 ${
                        key === projects?.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                      }`;

                      return (
                        <tr key={project._id}>
                          <td className={className}>
                            <div className="flex items-center gap-4">
                              <Avatar src={company_logo} alt={project.name} size="sm" />
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {project.name}
                              </Typography>
                            </div>
                          </td>
                          <td className={className}>
                            {users
                              .filter((user) => project?.members?.includes(user._id))
                              .map((member, key) => (
                                <Tooltip key={member._id} className="bg-slate-900" content={member.name}>
                                  <Avatar
                                    src={pic}
                                    alt={"project member"}
                                    // size="xs"
                                    //  variant="circular"
                                    className={`cursor-pointer border-2 h-7 w-7 rounded-full border-white ${
                                      key === 0 ? "" : "-ml-2.5"
                                    }`}
                                  />
                                </Tooltip>
                              ))}
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              className="text-xs font-medium text-blue-gray-600"
                            >
                              $10,000
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              className="text-xs font-medium text-blue-gray-600"
                            >
                              {completion(project?._id) === 100 ? "completed" : "pending"}
                            </Typography>
                          </td>
                          <td className={className}>
                            <div className="w-10/12">
                              <Typography
                                variant="small"
                                className="mb-1 block text-xs font-medium text-blue-gray-600"
                              >
                                {completion(project._id)}%
                              </Typography>
                              <Progress
                                value={completion(project._id)}
                                // variant="gradient"
                                // color={completion(project._id) === 100 ? "green" : "blue"}
                                className="h-1 bg-gray-200"
                              />
                            </div>
                          </td>
                          <td className={className}>
                            <Typography
                              as="a"
                              href="#"
                              className="text-xs font-semibold text-blue-gray-600"
                            >
                              <EllipsisVerticalIcon
                                strokeWidth={2}
                                className="h-5 w-5 text-inherit"
                              />
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
