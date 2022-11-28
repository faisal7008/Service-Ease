import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { AiFillHome } from "react-icons/ai";
import { BsFolderFill } from "react-icons/bs";
import { FaHandshake, FaUsers } from "react-icons/fa";
import {AiOutlineSetting} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'

export default function Employee(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/");
    }
    if (user.role !== "Employee") {
      navigate("/login");
    }
  }, [user, isSuccess, isLoading, isError, message, navigate, dispatch]);

  const onLogout = function(){
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const navigation = [
    { name: "Dashboard", href: "/employee/dashboard", icon: <AiFillHome size={18}/>, current: props.dashboard },
    { name: 'Projects', href: '/employee/projects', icon: <BsFolderFill size={18}/>, current: props.projects },
    { name: 'Teams', href: '/employee/teams', icon: <FaHandshake size={18}/>, current: props.teams },
    { name: 'Community', href: '/employee/community', icon: <FaUsers size={18}/>, current: props.community },
  ];

  const userNavigation = [
    { name: "Your Profile", href: "/employee/profile",  icon: <BiUser size={18}/>},
    { name: "Settings", icon: <AiOutlineSetting size={18}/> },
    { name: "Logout", onLogout: onLogout,  icon: <FiLogOut size={18}/> },
  ];

  const childProps = {
    navigation,
    userNavigation,
    user
  }
  
  return (
    <>
      <div className="min-h-full">
        <Navbar {...childProps} />
        <div className="component min-h-full">{props.EmployeeComponent}</div>
      </div>
    </>
  );
}
