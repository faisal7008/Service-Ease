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

import projectsTableData from "../../utilities/data/projects-table-data"

export default function AllProjects() {
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
        <Card className="min-w-[85rem] mt-4">
        <CardHeader variant="gradient" className="mb-6 bg-teal-500 p-6">
          <Typography variant="h6" color="white">
            Projects Stats
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["project name", "members", "budget", "status", "completion", ""].map(
                  (el) => (
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
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {projectsTableData.map(
                ({ img, name, members, budget, completion }, key) => {
                  const className = `py-3 px-5 ${
                    key === projectsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="sm"
                              variant="circular"
                              className={`cursor-pointer rounded-full border-2 border-white ${
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
                          {budget}
                        </Typography>
                      </td>
                      <td className={className}>
                            <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                        >
                            pending
                        </Typography>
                          </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            {completion}%
                          </Typography>
                          <Progress
                            value={completion}
                            variant="gradient"
                            color={completion === 100 ? "green" : "blue"}
                            className="h-1"
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
  )
}
