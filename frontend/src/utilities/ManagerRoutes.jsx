import Manager from "../components/Manager";
import ManagerDashboard from "../pages/Manager/Dashboard";
import Community from "../pages/Community/Community";
import Profile from "../components/profile/Profile";
import ManagerProjects from "../pages/Manager/ManagerProjects";
import { Navigate, Outlet, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ManagerRoutes() {
    const {user} = useSelector(state => state.auth)
  
  return (
    <>
     <Route
        path="dashboard"
        element={
          <Manager ManagerComponent={<ManagerDashboard />} dashboard={true} />
        }
      />
      <Route
        path="profile"
        element={<Manager ManagerComponent={<Profile />} />}
      />
      <Route
        path="projects"
        element={
          <Manager ManagerComponent={<ManagerProjects />} projects={true} />
        }
      />
      <Route
        path="community"
        element={<Manager ManagerComponent={<Community />} community={true} />}
      />
    </>
  );
}
