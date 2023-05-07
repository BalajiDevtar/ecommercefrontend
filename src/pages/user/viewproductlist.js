import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewProductList = (props) => {

    // const category = props.match.params.category;

    const [products, setProducts] = useState([]);
    const [image, setImage] = useState(null);
  const {category} = useParams();
  console.log("title",category);
    useEffect(async() => {
        try{
            const response = await axios.get('http://localhost:5000/productsbycategory?category='+category)
            setProducts(response.data)

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

        <div>
            {
                products.map((elm)=>{

                    {/* const base64String = btao(
                        String.fromCharCode(..new Uint8Array(elm.productImage.data));
                    ), */}
                    return(
                        <>
                        <div className='w-[35px]'>
                       {/* { Buffer.from(elm.buffer).toString('base64') } */}
                        <h2>{elm.productName}</h2>
                        <h2>{elm.productDescription}</h2>
                        <h2>{elm.price}</h2>
              {/* <img src={`${elm.productImage.mimetype};base64,${elm.productImage.buffer}`} alt={elm.productImage.originalname} /> */}

              <img className='w-25 h-25' src={`https://shoppingbackend-60lb.onrender.com/${elm.productImage}`} alt="MongoDB Image" />
              </div>
                  {/* <img src={image} alt="scc"/>      */}
                        </>

                    )
                })
            }
        </div>
    </>
    // <div>
    //   <h1>Products</h1>
    //   {products.map(product => (
    //     <div key={product._id}>
    //       <h2>{product.productName}</h2>
    //       <p>{product.productDescription}</p>
    //       <p>{product.price}</p>
    //       <img src={`data:${product.productImage.contentType};base64,${product.productImage.image}`} alt={product.productName} />
    //     </div>
    //   ))}
    // </div>

    
  )
}

export default ViewProductList



  