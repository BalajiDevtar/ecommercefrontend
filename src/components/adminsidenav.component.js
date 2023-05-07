import {React,useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';


const AdminSidebar = () => {
   
  return (
    <div>
    <div className="sidebar">
      <Link to="/adminprofile">Dashboard</Link>
      <Link to="#">Users</Link>
      <Link to="#">Settings</Link>
      <Link to="#">Reports</Link>
      <Link to="/addproduct">Add Products</Link>
    </div>


    </div>
    
  )
}

export default AdminSidebar
