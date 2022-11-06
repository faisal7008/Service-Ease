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
import LeaderDashboard from "./pages/Leadership/Dashboard";
import ManagerDashboard from "./pages/Manager/Dashboard"
import EmployeeDashboard from "./pages/Employee/Dashboard"
import LeaderProfile from "./pages/Leadership/LeaderProfile"
import ManagerProfile from "./pages/Manager/ManagerProfile"
import EmployeeProfile from "./pages/Employee/EmployeeProfile"
import Community from "./pages/Community/Community";

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
          <Route element={<LeadershipLayout />}>
            <Route
              path="leadership/dashboard"
              element={
                user ? <Leadership LeaderComponent={<LeaderDashboard />} dashboard={true} /> : <Navigate replace to="/login" /> 
              }
            />
            <Route
              path="leadership/profile"
              element={
                user ? <Leadership LeaderComponent={<LeaderProfile />} /> : <Navigate replace to="/login" /> 
              }
            />
            <Route
              path="leadership/community"
              element={
                user ? <Leadership LeaderComponent={<Community />} community={true} /> : <Navigate replace to="/login" /> 
              }
            />
          </Route>
          {/* Manager Routes */}
          <Route element={<ManagerLayout />}>
            <Route
              path="manager/dashboard"
              element={
                user ? <Manager ManagerComponent={<ManagerDashboard/>} dashboard={true}/> : <Navigate replace to="/login" />
              }
            />
            <Route
              path="manager/profile"
              element={
                user ? <Manager ManagerComponent={<ManagerProfile />} /> : <Navigate replace to="/login" /> 
              }
            />
            <Route
              path="manager/community"
              element={
                user ? <Manager ManagerComponent={<Community />} community={true} /> : <Navigate replace to="/login" /> 
              }
            />
          </Route>
          {/* Employee Routes */}
          <Route element={<EmployeeLayout />}>
            <Route
              path="employee/dashboard"
              element={
                user ? <Employee EmployeeComponent={<EmployeeDashboard/>} dashboard={true} /> : <Navigate replace to="/login" />
              }
            />
            <Route
              path="employee/profile"
              element={
                user ? <Employee EmployeeComponent={<EmployeeProfile />} /> : <Navigate replace to="/login" /> 
              }
            />
            <Route
              path="employee/community"
              element={
                user ? <Employee EmployeeComponent={<Community />} community={true} /> : <Navigate replace to="/login" /> 
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
