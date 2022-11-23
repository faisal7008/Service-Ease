import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useEffect } from "react";
import Navbar from "./Navbar";

export default function Manager(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/");
    }
    if (user.role !== "Manager") {
      navigate("/login");
    }
  }, [user, isSuccess, isLoading, isError, message, navigate, dispatch]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const navigation = [
    { name: "Dashboard", href: "./dashboard", current: props.dashboard },
    { name: 'Projects', href: './projects', current: props.projects },
    { name: 'Teams', href: './teams', current: props.team },
    { name: 'Community', href: './community', current: props.community },
  ];
  
  return (
    <>
      <div className="min-h-full">
        <Navbar navigation={navigation} onLogout={onLogout} user={user} />
        <div className="component min-h-full">{props.ManagerComponent}</div>
      </div>
    </>
  );
}
