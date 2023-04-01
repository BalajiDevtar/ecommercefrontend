import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg flex justify-content-between bg-body-tertiary border-primary">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">Balaji Website</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  flex justify-content-between " id="navbarSupportedContent">
     <div className=''>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="#" className="nav-link fw-bold text-red " aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link fw-bold" href="#">Mens</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link fw-bold" href="#">Women</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link fw-bold" href="#">Kids</Link>
        </li>
       
      </ul>
      </div>
      
      <div className='border-secondary '>
      {/* <form className="flex w-100 form-inline my-2 my-lg-0 border" role="search">
      <div>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </div>
        <div>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </div>
      </form> */}
      </div>
      <div className=' flex  p-2 '>
      <Link className='p-5 text-decoration-none text-black' to="/adminregister" >Register</Link>
       
      <LoginIcon />
      <Link className='p-2 text-decoration-none text-black' to="/adminlogin">Login</Link>

      </div>
     
   
    </div>
  </div>
</nav>



    </div>
    
  )
}

export default NavBar
