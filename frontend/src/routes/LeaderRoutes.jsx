import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Leadership from '../components/Leadership'
import Profile from '../components/profile/Profile'
import Community from '../pages/Community/Community'
import AllUsers from '../pages/Leadership/AllUsers'
import LeaderDashboard from '../pages/Leadership/Dashboard'
import AllProjects from '../pages/Projects/AllProjects'

export default function LeaderRoutes({user}) {
  return (
    <Routes>
        <Route index
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
          </Routes>
  )
}
