import {React,useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';


const AdminSidebar = () => {

 


   
  return (
    <div>
    <div className="sidebar">
      <a href="#">Dashboard</a>
      <a href="#">Users</a>
      <a href="#">Settings</a>
      <a href="#">Reports</a>
    </div>


    </div>
    
  )
}

export default AdminSidebar
