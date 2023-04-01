import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navnbar.component';
import axios from "axios";
import {useNavigate} from "react-router-dom";



const Login = () => {

  const [response, setResponse] = useState("")

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const response = await axios.post('http://localhost:5000/login', formData);
      // navigate("/")
      if(response.data.user){
        navigate("/")
        localStorage.setItem('token', response.data.token);
        
      }else{
        setResponse(response.data.message)
      }


      
      
    } catch (error) {
      console.error(error);
      
    }
    
  }

  return (
    <>
    <NavBar />
    <div className='login-container'>
    
    <form class="form-signin  border-primary">
  <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
  <h1>{response}</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" value={formData.email} onChange={handleChange} name="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" value={formData.password} onChange={handleChange} name='password' id="inputPassword" class="form-control" placeholder="Password" required/>
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me
    </label>
  </div>
  <div>
    <p>Click Here For Register <Link to="/adminregister">Click Here</Link></p>
  </div>
  <button onClick={handleSubmit} class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
</form>

      
    </div>
    </>
  )
}

export default Login
