import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Tooltip,
  Progress,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
// import userimg from "../../assets/user.webp"
import { useState } from "react";
import SearchBox from "../../components/searchbox/SearchBox";
import moment from "moment";
import { useEffect } from "react";
import { deleteUser, getAllUsers } from "../../features/users/userSlice";

const userimg = "https://res.cloudinary.com/dopuxe0m5/image/upload/v1671447572/service%40ease%20project%20assets/user_ufjgmf.webp"

export default function AllUsers() {
  const {user} = useSelector(state => state.auth)
  const {users, isSuccess} = useSelector(state => state.users)
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 
  const [searchField, setSearchField] = useState("");
  const [allUsers, setAllUsers] = useState([])
  useEffect(() => {
    setAllUsers(users.filter(user => user.role !== 'Leader'))
  },[dispatch, users])
  
  useEffect(() => {
    dispatch(getAllUsers())
  },[dispatch, isSuccess])

  useEffect(() => {
    // console.log(users);
    const filteredUsers = users?.filter(
      user => {
        return (
          user.role !== 'Leader' && user?.name.toLowerCase().includes(searchField?.toLowerCase()))
      }
    )
    // console.log(filteredUsers)
    setAllUsers(filteredUsers)
    // console.log(allUsers)
  }, [searchField])


  const handleDelete = (userId) => {
    const result = window.confirm("Are you sure you want to remove the user?")
    if(result){
      dispatch(deleteUser(userId, user.token))
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mx-12 py-4">
        <ol
          className="ml-3 flex items-center whitespace-nowrap min-w-0"
          aria-label="Breadcrumb"
        >
          <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
            Leader
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
            Users stats
          </li>
        </ol>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="text-white inline-flex justify-center items-center bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-4 py-2 mr-2"
          // data-hs-overlay="#hs-vertically-centered-modal"
        >
          <span className="mr-2">
            <FaUserPlus size={18} />
          </span>{" "}
          Add User
        </button>
      </div>
      <div className="grid p-4 justify-center">
        <div>
          <Card className="min-w-[85rem] my-6">
            <CardHeader
              variant="gradient"
              className="mb-6 -mt-6 bg-teal-500 p-6 flex items-center justify-between"
            >
              <Typography variant="h6" color="white">
                Users Stats
              </Typography>
              <SearchBox searchField={searchField} setSearchField={setSearchField}/>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    {[
                      "#",
                      "full name",
                      "age",
                      "job title",
                      "salary",
                      "status",
                      "joined",
                      "actions",
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
                  {allUsers.length > 0 ? allUsers?.map(
                    (member, key) => {
                      const className = `py-3 px-5 ${
                        key === allUsers.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                      }`;

                      return (
                        <tr key={member._id}>
                        <td className={`${className} w-10`}>
                        <Typography
                            variant="small"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            {key+1}
                          </Typography>
                        </td>
                          <td className={className}>
                            <div className="flex items-center gap-4">
                              <Avatar className="rounded-full" src={member.profilePicture ? member.profilePicture : userimg} alt={member.name} size="sm" />
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {member.name}
                              </Typography>
                            </div>
                          </td>
                          <td className={className}>
                          <Typography
                              variant="small"
                              className="text-xs font-medium text-blue-gray-600"
                            >
                              25
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              className="text-xs font-medium text-blue-gray-600"
                            >
                              {member.role}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              className="text-xs font-medium text-blue-gray-600"
                            >
                              $10000
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              className="text-xs font-medium text-blue-gray-600"
                            >
                              {key%2 == 0 ? <Button className="px-2 py-1 lowercase tracking-wide rounded bg-green-500 text-white">
                                online
                              </Button> :
                              <Button className="px-2 py-1 lowercase tracking-wide rounded bg-rose-500 text-white">
                                offline
                              </Button>}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              className="text-xs font-medium text-blue-gray-600"
                            >
                              {moment(member.createdAt).format('ll')}
                            </Typography>
                          </td>
                          <td className={`${className} w-72`}>
                            
                            <Button className="px-3 py-1.5 mr-2 text-xs font-medium text-gray-700 bg-gray-200 shadow-none rounded hover:text-gray-900 hover:bg-gray-300">edit</Button>
                            <Button onClick={() => navigate('/leadership/community')} className="px-3 py-1.5 mr-2 text-xs font-medium text-gray-700 bg-gray-200 shadow-none rounded hover:text-gray-900 hover:bg-gray-300">chat</Button>
                            <Button onClick={() => handleDelete(member._id)} className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-200 shadow-none rounded hover:text-gray-900 hover:bg-gray-300">remove</Button>
                          </td>
                        </tr>
                      );
                    }
                  ) : <tr className=""><td colSpan={8}><p className="w-full flex my-6 text-lg font-semibold justify-center"> No results </p></td></tr>}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* <Fragment>
      <Button className=" bg-teal-600" onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} className=" border" handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo!
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" className=" bg-teal-700" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment> */}
    </div>
  );
}
