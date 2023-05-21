import {React,useState} from 'react'
import AdminTopNav from '../../components/admintopnav'
import AdminSidebar from '../../components/adminsidenav.component'
import axios from 'axios'
const AddProduct = () => {


  const [response, setResponse] = useState("")
  
  const [productImage, setProductImage] = useState(null);

 
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    price: '',
    productImg:''
  });

  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      productImg: event.target.files[0],
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("productName", formData.productName);
    formDataToSend.append("productDescription", formData.productDescription);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("productImg", formData.productImg);
    
    try {
       await axios.post('http://localhost:5000/addproducts',formDataToSend);
      console.log(formData);
      console.log("formDataToSend",formDataToSend);
      alert('Product uploaded successfully');
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  console.log("productName",formData);


  return (
    <div>
    <AdminTopNav />

        <div className='sidenav'>
      <AdminSidebar />
      </div>
    <form style={{margin:"auto",width:"1000px"}} onSubmit={handleSubmit} encType="multipart/form-data">
  <div class="form-group">
    <label for="productName">Product Name:</label>
    <input type="text"  name="productName" value={formData.productName} onChange={handleChange} class="form-control" id="productName"/>
  </div>
  <div class="form-group">
    <label for="productDescription">Product Description:</label>
    <textarea class="form-control"  name="productDescription" value={formData.productDescription} onChange={handleChange} id="productDescription"></textarea>
  </div>
  <div class="form-group">
    <label for="productPrice">Product Price:</label>
    <input type="number"  name="price" value={formData.productPrice} onChange={handleChange} class="form-control" id="productPrice"/>
  </div>

  <div class="form-group">
    <label for="img">Product Image:</label>
  
    <input type="file"  name="productImg" accept="image/*"   onChange={handleImageChange} class="form-control" id="productPrice"/>
  </div>

  <button type="submit" class="btn btn-primary">Add Product</button>
</form>

      
    </div>
  )
}

export default AddProduct
