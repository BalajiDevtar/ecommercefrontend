import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/navnbar.component';
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
      const response = await axios.post('https://ecommercebackend-6rn6.onrender.com/login', formData);
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
   
    <form className="form-signin  border-primary">
  <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
  
    <div class="error">
					<p>{response}</p>
				</div>
  
 
 
  <label for="inputEmail" className="sr-only">Email address</label>
  <input type="email" value={formData.email} onChange={handleChange} name="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
  <label for="inputPassword" className="sr-only">Password</label>
  <input type="password" value={formData.password} onChange={handleChange} name='password' id="inputPassword" className="form-control" placeholder="Password" required/>
  <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me
    </label>
  </div>
  <div>
    <p>Click Here For Register <Link to="/adminregister">Click Here</Link></p>
  </div>
  <button onClick={handleSubmit} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
</form>

      
    </div>
    </>
  )
}

export default Login
