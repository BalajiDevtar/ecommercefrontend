import React from 'react'
import { Route,Routes } from 'react-router-dom'
import DashBoard from './pages/dashboard'
import Login from './pages/user/login'
import Register from './pages/user/register'
import CustomerLogin from './pages/admin/login'
import AdminProfile from './pages/admin/adminprofile'
import AddProduct from './pages/admin/addproduct'
import ViewProductList from './pages/user/viewproductlist'

const Routers = () => {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<DashBoard />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/adminlogin" element={<CustomerLogin />} />
      <Route exact path="/adminProfile" element={<AdminProfile />} />
      <Route exact path="/addproduct" element={<AddProduct />} />
      <Route exact path="/productlist/:category" element={<ViewProductList />} />
    

      </Routes>
    </div>
  )
}

export default Routers
