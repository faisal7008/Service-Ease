import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject, getProjects } from '../../features/projects/projectSlice';
import { Link, useNavigate } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import CreateProject from '../../components/projects/CreateProject';
import { FaArrowRight, FaBackward, FaEdit, FaFolderPlus } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
// import projectlogo from "../../assets/coder.jpeg";
import { getAllUsers } from '../../features/users/userSlice';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';

const projectlogo =
  'https://res.cloudinary.com/dopuxe0m5/image/upload/v1671447574/service%40ease%20project%20assets/coder_hjkju8.jpg';

export default function Project() {
  const { projects } = useSelector((state) => state.projects);
  const { users } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProjects());
    dispatch(getAllUsers());
  }, []);

  let myProjects = projects?.filter(
    (project) => project?.admins?.includes(user?._id) || project?.members?.includes(user?._id),
  );
  // const members =  users.filter(user => project.members?.includes(user._id))
  return (
    <>
      <div className='flex justify-between items-center mx-2 sm:mx-12 py-4'>
        <ol className='ml-3 flex items-center whitespace-nowrap min-w-0' aria-label='Breadcrumb'>
          <li className='flex items-center text-sm text-gray-800 dark:text-gray-400'>
            {user.role}
            <svg
              className='flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
              />
            </svg>
          </li>
          <li
            className='text-base font-semibold text-gray-800 truncate dark:text-gray-400'
            aria-current='page'
          >
            My Projects
          </li>
        </ol>
        {user.role === 'Manager' ? (
          <button
            type='button'
            className='text-white inline-flex justify-center items-center bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-4 py-2 mr-2'
            data-hs-overlay='#hs-vertically-centered-modal'
          >
            <span className='mr-2'>
              <FaFolderPlus size={18} />
            </span>{' '}
            Add Project
          </button>
        ) : (
          <></>
        )}
      </div>
      {/* <!-- End Breadcrumb --> */}
      <main className='grid p-2 mb-8 mx-4 md:mx-20 mt-2'>
        <div className='grid w-full sm:grid-cols-3 gap-4 sm:gap-6'>
          {myProjects?.map((project) => (
            <Card key={project._id} color='transparent' shadow={false}>
              <CardHeader
                floated={false}
                color='gray'
                className='mx-0 mt-0 mb-4 h-64 xl:h-40'
                shadow={false}
              >
                <img src={projectlogo} alt='project pic' className='h-full w-full object-cover' />
              </CardHeader>
              <CardBody className='py-0 px-1'>
                <div className='flex items-center justify-between'>
                  <Typography variant='small' className='font-normal text-blue-gray-500'>
                    {project.key}
                  </Typography>
                  <Menu>
                    <MenuHandler>
                      <Button className='bg-transparent shadow-none px-1 py-2 rounded-md hover:bg-slate-200 transition-all text-sm'>
                        <svg
                          className='w-4 h-4 text-gray-600'
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          viewBox='0 0 16 16'
                        >
                          <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
                        </svg>
                      </Button>
                    </MenuHandler>
                    <MenuList className='p-1 w-32 ml-8'>
                      <MenuItem
                        onClick={() => navigate(`${project._id}/settings`)}
                        className='flex w-full justify-left items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-800 hover:bg-slate-200 hover:font-medium'
                      >
                        <FiEdit /> edit
                      </MenuItem>
                      <MenuItem
                        onClick={() => dispatch(deleteProject(project._id))}
                        className='flex w-full justify-left items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-800 hover:bg-slate-200 hover:font-medium'
                      >
                        <BsTrash /> delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <Typography variant='h5' color='blue-gray' className='mt-1 mb-2'>
                  {project.name}
                </Typography>
                <Typography variant='small' className='font-normal text-blue-gray-500'>
                  {project.desc}
                </Typography>
              </CardBody>
              <CardFooter className='mt-6 flex items-center justify-between py-0 px-1'>
                <Link to={project._id}>
                  <Button
                    variant='outlined'
                    className='text-teal-500 transition ease-out duration-200 hover:border-white hover:text-white hover:bg-teal-500'
                    size='sm'
                  >
                    view project
                  </Button>
                </Link>
                <div>
                  {users
                    .filter((user) => project.members?.includes(user._id))
                    .map((member, key) => (
                      <Tooltip
                        key={member._id}
                        className='rounded bg-slate-900'
                        content={member.name}
                      >
                        <Avatar
                          src={projectlogo}
                          alt={'project member'}
                          size='xs'
                          //  variant="circular"
                          className={`cursor-pointer border-2 rounded-full border-white ${
                            key === 0 ? '' : '-ml-2.5'
                          }`}
                        />
                      </Tooltip>
                    ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* </div> */}
        <CreateProject />
      </main>
    </>
  );
}
