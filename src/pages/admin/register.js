import {React,useState} from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../../components/navnbar.component';
import axios from "axios";


const Register = () => {

  const [response, setResponse] = useState("")

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async(event) =>{
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/resister', formData);
      console.log(response);
      setResponse(response.data.message)

    } catch (error) {
      console.error(error);
    }
    
  }

  return (
    <>
    <NavBar />
    <div className='registercontainer'>
        <form action="action_page.php resister " className='resister'>
  <div class="container ">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>
   <h1>{response}</h1>
    <label for="name"><b>User Name</b></label>
    <input type="text" name="name" value={formData.name} onChange={handleChange} />

    <label for="email"><b>Email</b></label>
    <input type="email" name="email" value={formData.email} onChange={handleChange} />

    <label for="psw"><b> Password</b></label>
    <input type="password" name="password" value={formData.password} onChange={handleChange} />
    <hr/>

    <p>By creating an account you agree to our <Link to="#">Terms & Privacy</Link>.</p>
    <button type="submit" class="registerbtn" onClick={handleSubmit}>Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <Link to="/adminlogin">Sign in</Link>.</p>
  </div>
</form>
    </div>
    </>

  )
}

export default Register
