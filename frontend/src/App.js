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
import Leadership from "./components/Leadership";
import Manager from "./components/Manager";
import Employee from "./components/Employee";
import LeaderDashboard from "./pages/Leadership/Dashboard";
import ManagerDashboard from "./pages/Manager/Dashboard";
import EmployeeDashboard from "./pages/Employee/Dashboard";
import Community from "./pages/Community/Community";
import Profile from "./components/profile/Profile";
import NewDashboard from "./pages/Public/NewDashboard";
import Project from "./pages/Projects/Project";
import Task from "./pages/Projects/Task";
import IssueDetails from "./components/issues/IssueDetails";
import Team from "./pages/teams/Team";

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
          <Route path="leadership"
            element={user ? <Leadership /> : <Navigate replace to="/login" />}
          >
            <Route path="dashboard" element={<LeaderDashboard/>}
            />
            <Route path="profile" element={<Profile />}
            />
            <Route path="community" element={<Community />}
            />
          </Route>
          {/* Manager Routes */}
          <Route path="manager"
            element={
              user ? <Manager /> : <Navigate replace to="/login" />
            }
          >
            <Route path="dashboard" element={<ManagerDashboard />}
            />
            <Route path="profile" element={<Profile />}
            />
            <Route path="projects">
              <Route index element={<Project />} />
              <Route path=":projectId" element={<Task />}>
                  <Route path=":issueId" element={<IssueDetails/>} />
              </Route>
            </Route>
            <Route path="teams" element={<Team />}
            />
            <Route path="community" element={<Community />}
            />
          </Route>
          {/* Employee Routes */}
          <Route path="employee" element={user ? <Employee /> : <Navigate replace to="/login" />}>
            <Route path="dashboard" element={<EmployeeDashboard/>}
            />
            <Route path="profile" element={<Profile />}
            />
            <Route path="projects">
              <Route index element={<Project />} />
              <Route path=":projectId" element={<Task />}>
                  <Route path=":issueId" element={<IssueDetails/>} />
              </Route>
            </Route>
            <Route path="teams" element={<Team />}
            />
            <Route path="community" element={<Community />}
            />
          </Route>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/dashboard" element={<NewDashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
