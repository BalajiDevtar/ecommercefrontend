import { Navbar, Nav, Container, Form, Button, Dropdown } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import axios from 'axios';
// import {  , BiPeBiGear FillrsonFill } from 'react-icons/bi';

function AdminTopNav() {

  useEffect(() => {
    async function fetchData() {
      try {
        // const res = await axios.get('https://shoppingbackend-60lb.onrender.com/api/users/count');
        const orderRes = await axios.get("http://localhost:5000/adminlogin");
        // console.log();
        // setOrderData(orderRes.data)
        // setUserData(res.data);
        console.log("orderRes",orderRes);
      } catch (err) {
        // console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo and Name */}
        <div className=''>
        <Navbar.Brand className=" p-[30px] ml-[-30px" href="#" style={{padding:"20px"}}>
          {/* <img src="your-logo.png" alt="Your Logo" width="50" height="50" className="d-inline-block align-text-top me-2" /> */}
          Your Name
        </Navbar.Brand>
        </div>

        {/* Hamburger Menu */}
        <Navbar.Toggle aria-controls="navbar" />

        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            {/* Search Bar */}
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-light">Search</Button>
            </Form>

            {/* Notification Icon */}
            <Nav.Link href="#">
              {/* <BiBellFill /> */}
            </Nav.Link>

            {/* Setting Icon */}
            <Nav.Link href="#">
              {/* <BiGearFill /> */}
            </Nav.Link>

            {/* User Profile Icon and Image */}
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="userMenu">
                {/* <BiPersonFill className="me-2" /> */}
                Your Name
                <img src="your-profile-image.png" alt="Your Profile Image" width="30" height="30" className="rounded-circle ms-2" />
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminTopNav;
