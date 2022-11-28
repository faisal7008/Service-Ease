import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useEffect } from "react";
import Navbar from "./Navbar";
import LeaderDashboard from "../pages/Leadership/Dashboard";
import Profile from "./profile/Profile";
import Community from "../pages/Community/Community";

export default function Leadership(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const { page, id } = useParams()
  console.log(page);
  console.log(id);

  const pageObjects = {
    dashboard:<LeaderDashboard/>,
    profile:<Profile/>,
    community:<Community/>
  }

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/");
    }
    if (user.role !== "Leader") {
      navigate("/login");
    }
  }, [user, isSuccess, isLoading, isError, message, navigate, dispatch]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };


  const navigation = [
    { name: "Dashboard", href: "./dashboard", current: function () {
      return (this.href.slice(2) === page)
    } },
    { name: 'Team', href: '#', current: function () {
      return (this.href.slice(2) === page)
    } },
    { name: 'Projects', href: '#', current: function () {
      return (this.href.slice(2) === page)
    } },
    { name: 'Calendar', href: '#', current: function () {
      return (this.href.slice(2) === page)
    } },
    { name: 'Community', href: './community', current: function () {
      return (this.href.slice(2) === page)
    } },
  ];
  
  return (
    <>
      <div className="min-h-full">
        <Navbar navigation={navigation} onLogout={onLogout} user={user} />
        <div className="component min-h-full">{pageObjects[page]}</div>
      </div>
    </>
  );
}
