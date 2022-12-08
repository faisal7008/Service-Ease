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
import projectlogo from "../../assets/coder.jpeg"
import { getAllUsers } from "../../features/users/userSlice";import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Avatar,
  Button,
} from "@material-tailwind/react";

export default function Project() {
  const { projects } = useSelector((state) => state.projects);
  const { users } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
    dispatch(getAllUsers())
  }, []);

  // const members =  users.filter(user => project.members?.includes(user._id))
  return (
    <>
      <div className="flex items-center ml-12 py-4">
            <ol
              className="ml-3 flex items-center whitespace-nowrap min-w-0"
              aria-label="Breadcrumb"
            >
              <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                {user.role}
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
                My Projects
              </li>
            </ol>
        </div>
      {/* <!-- End Breadcrumb --> */}
      <main className="grid min-w-[85rem] border m-14 mt-4 place-content-center">
        <div className="flex justify-between">
          <h1 className="text-2xl text-slate-800 font-semibold mb-6">
            My projects
          </h1>
          <div>
            {user.role === "Manager" ? <button
              data-hs-overlay="#hs-vertically-centered-modal"
              className="px-4 py-2 text-white bg-teal-600 hover:bg-teal-700 rounded text-sm"
            >
              Create new project
            </button> : <></>}
          </div>
        </div>
        <div className="flex max-w-6xl justify-center">
          <div className="grid grid-cols-3 gap-6">
            {projects.map((project) => (
             <Card key={project._id} color="transparent" shadow={false}>
             <CardHeader
               floated={false}
               color="gray"
               className="mx-0 mt-0 mb-4 h-64 xl:h-40"
             >
               <img
                 src={projectlogo}
                 alt="project pic"
                 className="h-full w-full object-cover"
               />
             </CardHeader>
             <CardBody className="py-0 px-1">
               <Typography
                 variant="small"
                 className="font-normal text-blue-gray-500"
               >
                 tag
               </Typography>
               <Typography
                 variant="h5"
                 color="blue-gray"
                 className="mt-1 mb-2"
               >
                 {project.name}
               </Typography>
               <Typography
                 variant="small"
                 className="font-normal text-blue-gray-500"
               >
                 {project.desc}
               </Typography>
             </CardBody>
             <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
               <Link to={project._id}>
                 <Button variant="outlined" size="sm">
                   view project
                 </Button>
               </Link>
               <div>
                 {users.filter(user => project.members?.includes(user._id)).map((member, key) => (
                   <Tooltip key={member._id} content={member.name}>
                     <Avatar
                       src={projectlogo}
                       alt={"project member"}
                       size="xs"
                       variant="circular"
                       className={`cursor-pointer border-2 border-white ${
                         key === 0 ? "" : "-ml-2.5"
                       }`}
                     />
                   </Tooltip>
                 ))}
               </div>
             </CardFooter>
           </Card>
            ))}
            {projects.map((project) => (
             <Card key={project._id} color="transparent" shadow={false}>
             <CardHeader
               floated={false}
               color="gray"
               className="mx-0 mt-0 mb-4 h-64 xl:h-40"
               shadow={false}
             >
               <img
                 src={projectlogo}
                 alt="project pic"
                 className="h-full w-full object-cover"
               />
             </CardHeader>
             <CardBody className="py-0 px-1">
               <Typography
                 variant="small"
                 className="font-normal text-blue-gray-500"
               >
                 {project.key}
               </Typography>
               <Typography
                 variant="h5"
                 color="blue-gray"
                 className="mt-1 mb-2"
               >
                 {project.name}
               </Typography>
               <Typography
                 variant="small"
                 className="font-normal text-blue-gray-500"
               >
                 {project.desc}
               </Typography>
             </CardBody>
             <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
               <Link to={project._id}>
                 <Button variant="outlined" className="text-teal-500" size="sm">
                   view project
                 </Button>
               </Link>
               <div>
                 {users.filter(user => project.members?.includes(user._id)).map((member, key) => (
                   <Tooltip key={member._id} content={member.name}>
                     <Avatar
                       src={projectlogo}
                       alt={"project member"}
                       size="xs"
                      //  variant="circular"
                       className={`cursor-pointer border-2 rounded-full border-white ${
                         key === 0 ? "" : "-ml-2.5"
                       }`}
                     />
                   </Tooltip>
                 ))}
               </div>
             </CardFooter>
           </Card>
            ))}
            {projects.map((project) => (
             <Card key={project._id} color="transparent" shadow={false}>
             <CardHeader
               floated={false}
               color="gray"
               className="mx-0 mt-0 mb-4 h-64 xl:h-40"
             >
               <img
                 src={projectlogo}
                 alt="project pic"
                 className="h-full w-full object-cover"
               />
             </CardHeader>
             <CardBody className="py-0 px-1">
               <Typography
                 variant="small"
                 className="font-normal text-blue-gray-500"
               >
                 tag
               </Typography>
               <Typography
                 variant="h5"
                 color="blue-gray"
                 className="mt-1 mb-2"
               >
                 {project.name}
               </Typography>
               <Typography
                 variant="small"
                 className="font-normal text-blue-gray-500"
               >
                 {project.desc}
               </Typography>
             </CardBody>
             <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
               <Link to={project._id}>
                 <Button variant="outlined" size="sm">
                   view project
                 </Button>
               </Link>
               <div>
                 {users.filter(user => project.members?.includes(user._id)).map((member, key) => (
                   <Tooltip key={member._id} content={member.name}>
                     <Avatar
                       src={projectlogo}
                       alt={"project member"}
                       size="xs"
                       variant="circular"
                       className={`cursor-pointer border-2 border-white ${
                         key === 0 ? "" : "-ml-2.5"
                       }`}
                     />
                   </Tooltip>
                 ))}
               </div>
             </CardFooter>
           </Card>
            ))}
          </div>
        </div>
        <CreateProject />
      </main>
    </>
  );
}
