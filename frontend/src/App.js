import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import Feedback from "./pages/Manager/Feedback";
import AllTasks from "./components/issues/AllTasks";
import ProjectSettings from "./components/projects/ProjectSettings"
import AllProjects from "./pages/Projects/AllProjects";
import AllUsers from "./pages/Leadership/AllUsers";
import Survey from "./pages/Employee/Survey";
import { getMyProfile } from "./features/users/userSlice";
import Signup from "./pages/Public/Signup";

const PublicLayout = () => (
  <div>
    <h1 className="hidden">Public Layout</h1>
    <Outlet />
  </div>
);

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMyProfile())
  }, [])
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
            <Route path="projects" element={<AllProjects/>}
            />
            <Route path="users" element={<AllUsers/>}
            />
            <Route path="profile" element={<Profile />}
            />
            <Route path="community" element={<Community />}
            />
          </Route>
          {/* Manager Routes */}
          <Route path="manager"
            element={user ? <Manager /> : <Navigate replace to="/login" />}
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
            <Route path="feedback" element={<Feedback />}
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
            {/* <Route path="projects">
              <Route index element={<Project />} />
              <Route path=":projectId">
                  <Route index element={<Task/>} />
                  <Route path=":issueId" element={<IssueDetails/>} />
                  <Route path="settings" element={<ProjectSettings/>} />
              </Route>
            </Route> */}
            <Route path="projects">
              <Route index element={<Project />} />
              <Route path=":projectId" element={<Task />}>
                  <Route path=":issueId" element={<IssueDetails/>} />
              </Route>
            </Route>
            <Route path="survey" element={<Survey />}
            />
            <Route path="community" element={<Community />}
            />
          </Route>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/register" element={user ? <UserRegister /> : <Navigate replace to={'/login'} />} />
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
