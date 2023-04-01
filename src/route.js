import React from 'react'
import { Route,Routes } from 'react-router-dom'
import DashBoard from './pages/dashboard'
import Login from './pages/admin/login'
import Register from './pages/admin/register'

const Routers = () => {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<DashBoard />} />
      <Route exact path="/adminlogin" element={<Login />} />
      <Route exact path="/adminregister" element={<Register />} />
      
      </Routes>
    </div>
  )
}

export default Routers
