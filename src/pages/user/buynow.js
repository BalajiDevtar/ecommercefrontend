import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import { Dropdown } from 'primereact/dropdown';
import NavBar from '../../components/navnbar.component';


const BuyNow = (props) => {

    // const category = props.match.params.category;

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: '1', code: 'NY' },
        { name: '2', code: 'RM' },
        { name: '3', code: 'LDN' },
        { name: '4', code: 'IST' },
        { name: '5', code: 'PRS' }
    ];

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const { id } = useParams();

    // products.concat(selectedCity)
    const [response, setResponse] = useState("")
    const [useEffectCall,setUseEffectCall] = useState(false)

    useEffect(() => {
        const fetchData = async()=>{
        try {
            const response = await axios.get('http://localhost:5000/buynowbyid?id=' + id)
            // if (response.data.productImage) {
            //     setLoading(false);
            // }
            setLoading(false);

            setProducts(response.data)
            if(products === null) {
             setUseEffectCall(true)
            }
            console.log("response",response);
        } catch (err) {
            console.log(err);
        }
    }

    fetchData()
    }, []);



    const UpdatedArray = products.map((elm)=>{
        return{
            ...elm,
            quantity:selectedCity != null ? selectedCity.name : null
        }
    })
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/buynow', UpdatedArray);
            console.log("response",response);
            setResponse(response.data)

        } catch (error) {
            console.error(error);
        }

    }






    return (
        <>
            <div>
                {
                    products.map((elm) => {
                        return (
                            <>
                             <NavBar />

                                <div className="card" style={{ width: "18rem", margin: "auto" }}>
                                    {loading ?
                                        <div className="card flex justify-content-center">
                                            <ProgressSpinner />
                                        </div>
                                     :
                                     <>
                                        <img src={`https://shoppingbackend-60lb.onrender.com/${elm.productImage}`} alt="MongoDB Image" />

                                    <div className="card-body">
                                    <h5>{response}</h5>
                                        <h5 className="card-title">{elm.productName}</h5>
                                        <p className="card-text">{elm.productDescription}</p>
                                        <div className="card flex justify-content-center">
                                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                                placeholder="Select a Quantity" className="w-full md:w-14rem" />
                                        </div>
                                        <Link to={""} onClick={handleSubmit} className="btn mt-3 btn-primary">Buy Now</Link>
                                    </div>
                                    </>
                                    }
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BuyNow



