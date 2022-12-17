import { Avatar, Button, Card, CardBody, CardHeader, Tooltip, Typography, CardFooter } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getProjects } from '../../features/projects/projectSlice';
import { getAllUsers } from '../../features/users/userSlice';
import projectlogo from "../../assets/coder.jpeg"

export default function MyProjects() {
    const { projects } = useSelector((state) => state.projects);
  const { users } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
    dispatch(getAllUsers())
  }, []);

  let myProjects = projects?.filter(project => project.admins.includes(user?._id) || project.members.includes(user?._id))

  return (
    <div className="grid m-2 grid-cols-3 gap-6">
            {myProjects?.map((project) => (
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
          </div>
  )
}
