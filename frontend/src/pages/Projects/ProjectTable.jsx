import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Tooltip,
  Progress,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import company_logo from "../../utilities/data/img/logo-slack.svg";
import { getProjects } from "../../features/projects/projectSlice";

import projectsTableData from "../../utilities/data/projects-table-data";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../features/users/userSlice";
import { getAllIssues } from "../../features/issues/issueSlice";
import SearchBox from "../../components/searchbox/SearchBox";

const pic =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";

export default function ProjectTable() {
  const { projects, isSuccess } = useSelector((state) => state.projects);
  const { users } = useSelector((state) => state.users);
  const { issues } = useSelector((state) => state.issues);
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState("");
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    setAllProjects(projects);
  }, [dispatch, projects]);

  useEffect(() => {
    dispatch(getProjects());
    dispatch(getAllUsers());
    dispatch(getAllIssues());
  }, [dispatch, isSuccess]);

  useEffect(() => {
    // console.log(projects);
    const filteredProjects = projects?.filter((project) => {
      return project?.name.toLowerCase().includes(searchField?.toLowerCase());
    });
    // console.log(filteredProjects)
    setAllProjects(filteredProjects);
    // console.log(allProjects)
  }, [searchField]);

  const completion = (projectId) => {
    let currentIssues = issues.filter(
      (issue) => issue.project_id === projectId
    );
    let done_issues = issues.filter(
      (issue) => issue.status === "Done" && issue.project_id === projectId
    );
    let x = done_issues?.length;
    let y = currentIssues?.length;
    let completed = parseInt((x / y) * 100);
    return completed ? completed : 0;
  };

  return (
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
        {allProjects.length > 0 ? (
          allProjects?.map((project, key) => {
            const className = `py-3 px-5 ${
              key === projects?.length - 1 ? "" : "border-b border-blue-gray-50"
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
                      <Tooltip
                        key={member._id}
                        className="bg-slate-900 rounded"
                        content={member.name}
                      >
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
                    {completion(project?._id) === 100 ? (
                      <Button className="px-2 py-1 rounded bg-green-500 text-white">
                        completed
                      </Button>
                    ) : (
                      <Button className="px-2 py-1 rounded bg-yellow-400 text-white">
                        pending
                      </Button>
                    )}
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
          })
        ) : (
          <tr className="">
            <td colSpan={8}>
              <p className="w-full flex my-6 text-lg font-semibold justify-center">
                {" "}
                No results{" "}
              </p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
