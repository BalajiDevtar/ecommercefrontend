import {React,useState,useEffect} from 'react'
import NavBar from '../../components/navnbar.component'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AdminProfile from './adminprofile'

const CustomerLogin = () => {
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
 const [Autoticate,setAutoticate] = useState(false);
 const [loginResponse,setliginResponse] = useState([]);


 const arr = []




  const handleSubmit = async(event) =>{
    event.preventDefault();
    try {
      const response = await axios.post(`https://shoppingbackend-60lb.onrender.com/adminlogin`, formData);
      // navigate("/")
      if(response.data.user){
        // navigate("/adminProfile")
        localStorage.setItem('admintoken', response.data.token);
        arr.push(response.data.user)

  const token = localStorage.getItem("admintoken")
  if(token){
    setAutoticate(true)
  }

      }else{
        setResponse(response.data.message)
      }
    } catch (error) {
      console.error(error);

    }

  }

  useEffect(() => {
    // console.log("data", data);

    // const token = localStorage.getItem("admintoken")
    // if(token){
    //   setAutoticate(true)
    // }
  }, [])

  console.log("lo",Autoticate);

  return (
    <div>
    {
      Autoticate === false ?
      <>
      <NavBar />

<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-5">
      <div class="card mt-5">
        <div class="card-body">
          <h3 class="card-title text-center mb-4">Admin Login</h3>
          <div class="error">
      <p>{response}</p>
    </div>


          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" value={formData.email} onChange={handleChange} name="email" class="form-control" id="username" required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" value={formData.password} onChange={handleChange} name='password' class="form-control" id="password" required />
            </div>
            <button onClick={handleSubmit} type="submit" class="btn btn-primary btn-block mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</>


 : <AdminProfile formdata={formData} />

    }

    </div>
  )
}

export default CustomerLogin
