import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Public/Home";
import Footer from "./pages/Public/Footer";
import Login from "./pages/Public/Login";
import UserRegister from "./pages/Public/UserRegister";
import PageNotFound from "./pages/Public/PageNotFound";
import Leadership from "./components/Leadership"
import Manager from "./components/Manager"
import Employee from "./components/Employee"
import EmployeeDashboard from "./pages/Employee/Dashboard"
import Community from "./pages/Community/Community";
import Profile from "./components/profile/Profile";
import ManagerDashboard from "./pages/Manager/Dashboard";
import ManagerProjects from "./pages/Manager/ManagerProjects";

const LeadershipLayout = () => (
  <div>
    <h1 className="hidden">Leadership Layout</h1>
    {/* <AdminDashboard /> */}
    <Outlet />
  </div>
);

const ManagerLayout = () => (
  <div>
    <h1 className="hidden">Manager Layout</h1>
    <Outlet />
  </div>
);

const EmployeeLayout = () => (
  <div>
    <h1 className="hidden">Employee Layout</h1>
    <Outlet />
  </div>
);

const PublicLayout = () => (
  <div>
    <h1 className="hidden">Public Layout</h1>
    <Outlet />
  </div>
);

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="app min-h-screen">
      <Router>
        <Routes>
          {/* Leader Routes */}
          <Route path="leadership" element={user ? <LeadershipLayout /> : <Navigate replace to="/login"/>}>
            <Route path=":page" element={ <Leadership /> } />
          </Route>
          {/* Manager Routes */}
          <Route path="manager" element={user ? <ManagerLayout /> : <Navigate replace to="/login" />}
          >
            <Route
              path="dashboard"
              element={
                <Manager
                  ManagerComponent={<ManagerDashboard />}
                  dashboard={true}
                />
              }
            />
            <Route
              path="profile"
              element={<Manager ManagerComponent={<Profile />} />}
            />
            <Route
              path="projects"
              element={
                <Manager
                  ManagerComponent={<ManagerProjects />}
                  projects={true}
                />
              }
            />
            <Route
              path="community"
              element={
                <Manager ManagerComponent={<Community />} community={true} />
              }
            />
          </Route>
          {/* Employee Routes */}
          <Route path="employee" element={user ? <EmployeeLayout /> : <Navigate replace to="/login" />}
          >
            <Route
              path="dashboard"
              element={
                <Employee
                  EmployeeComponent={<EmployeeDashboard />}
                  dashboard={true}
                />
              }
            />
            <Route
              path="profile"
              element={<Employee EmployeeComponent={<Profile />} />}
            />
            <Route
              path="community"
              element={
                <Employee EmployeeComponent={<Community />} community={true} />
              }
            />
          </Route>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
