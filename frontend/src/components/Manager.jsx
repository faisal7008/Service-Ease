import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useEffect } from 'react';
import Navbar from './Navbar';
import { AiFillHome } from 'react-icons/ai';
import { BsFolderFill } from 'react-icons/bs';
import { FaHandshake, FaUsers } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { getMyProfile } from '../features/users/userSlice';

export default function Manager(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  useEffect(() => {
    if (user && isSuccess) {
      navigate('/');
    }
    if (user.role !== 'Manager') {
      navigate('/login');
    }
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  const navigation = [
    { name: 'Dashboard', href: '/manager/dashboard', icon: <AiFillHome size={18} /> },
    { name: 'Projects', href: '/manager/projects', icon: <BsFolderFill size={18} /> },
    { name: 'Feedback', href: '/manager/feedback', icon: <FaHandshake size={18} /> },
    { name: 'Community', href: '/manager/community', icon: <FaUsers size={18} /> },
  ];

  const userNavigation = [
    { name: 'Your Profile', href: '/manager/profile', icon: <BiUser size={18} /> },
    { name: 'Settings', icon: <AiOutlineSetting size={18} /> },
    { name: 'Logout', onLogout: onLogout, icon: <FiLogOut size={18} /> },
  ];

  const childProps = {
    navigation,
    userNavigation,
    user,
  };

  return (
    <>
      <div className='min-h-full'>
        <Navbar {...childProps} />
        <div className='component min-h-full'>
          {/* {props.ManagerComponent} */}
          <Outlet />
        </div>
      </div>
    </>
  );
}
