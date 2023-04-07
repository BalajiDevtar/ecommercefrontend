import React from 'react'
import { Route,Routes } from 'react-router-dom'
import DashBoard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'
import CustomerLogin from './pages/admin/login'
import AdminProfile from './pages/admin/adminprofile'

const Routers = () => {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<DashBoard />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/adminlogin" element={<CustomerLogin />} />
      <Route exact path="/adminProfile" element={<AdminProfile />} />
      
      </Routes>
    </div>
  )
}

export default Routers
