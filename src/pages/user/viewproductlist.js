import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/navnbar.component';
import { Link } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';

const ViewProductList = (props) => {

    // const category = props.match.params.category;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();
    const [image, setImage] = useState(null);
    const [Autoticate,setAutoticate] = useState(false);
  console.log("title",category);
    useEffect(async() => {
        try{
            const response = await axios.get('http://localhost:5000/productsbycategory?category='+category)
            setProducts(response.data)
            setLoading(false)
            const token = localStorage.getItem("token")


        if(token){
            setAutoticate(true)
          }

            console.log(response);
    // console.log(title);

            // console.log(response.data)
        }catch(err){
            console.log(err);
        }

    // axios.get('/api/products')
    //     .then(response => setProducts(response.data))
    //     .catch(error => console.log(error));
    }, []);

    // console.log(image);

    console.log("products",products);




  return (


        <>
          <NavBar />
            <div className=' d-flex justify-content-around flex-wrap' style={{margin:"auto"}}>
                {
                    products.map((elm) => {

                        return (
                            <>
                            <div className='d-flex  flex-wrap'>

                                <div class="card" style={{width: "18rem",margin:"auto"}}>
                                    {loading ? (
                                    <div className="card flex justify-content-center">
                             <ProgressSpinner />
                            </div>
                                    )
                                : (
                                  <>
                                  {/* <div className='d-flex'> */}

                                    <img  src={`https://shoppingbackend-60lb.onrender.com/${elm.productImage}`} alt="MongoDB Image" />
                                    <div class="card-body">
                                        <h5 class="card-title">{elm.productName}</h5>
                                        <p class="card-text">{elm.productDescription}</p>
                                        {
                                            Autoticate ?
                                          <Link to={`/buynow/${elm._id}`} class="btn btn-primary">Go to Buy</Link>
                                             :
                                            alert("please Login To Buy")
                                        }
                                    </div>
                                    {/* </div> */}
                                </>
                                )


                                    }
                       </div>
                       </div>

                            </>

                        )
                    })
                }
            </div>
        </>





  )
}

export default ViewProductList



