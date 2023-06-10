import {React,useEffect,useState,useRef} from 'react'
import AdminSidebar from '../../components/adminsidenav.component'
import AdminTopNav from '../../components/admintopnav'
import EChartsReact from 'echarts-for-react';
import axios from 'axios';
import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import DashBoard from '../dashboard';
import CustomerLogin from './login';

const AdminProfile = ({formdata}) => {

  console.log("loginResponse",formdata.email);

 const navigate = useNavigate();



 const [userData, setUserData] = useState([]);
 const [orderData, setOrderData] = useState([]);
 const [loginUserData,setLoginUserData] = useState([])


 useEffect(() => {
  async function fetchData() {
    try {
      const res = await axios.get('https://shoppingbackend-60lb.onrender.com/api/users/count');
      const orderRes = await axios.get("http://localhost:5000/ordercount");
      // console.log();
      const response = await axios.post(`https://shoppingbackend-60lb.onrender.com/adminlogin`, formdata);

      setOrderData(orderRes.data)
      setLoginUserData(response.data.user)
      console.log("res",loginUserData);
      setUserData(res.data);
      // console.log("orderRes",orderRes);
    } catch (err) {
      // console.error(err);
    }
  }
  fetchData();
}, []);

 console.log("userData", userData);


 const [Autoticate,setAutoticate] = useState(false);

 const toast = useRef(null);


    useEffect(() => {
      // console.log("data", data);
      console.log("admintoken",localStorage.getItem("admintoken"));

      const token = localStorage.getItem("admintoken")
      if(token){
        setAutoticate(true)
      }
      const userData = localStorage.getItem("userdata")

      console.log("token",JSON.stringify( userData));


      // if(Autoticate === false){
      //   toast.current.show({severity:'error', summary: 'Error', detail:'User Not login', life: 3000});        navigate("/")
      // }

    }, [])

    // userData.map((elm)=>{
    //   console.log("mo",`${elm.month}`);
    // })

    console.log("toast",userData);





  const  onlineSignupChart = {
    grid: {
        width: '60%',
        height: '60%',
        left: '20%',
        top: '0%'
      },

        xAxis: {
          type: 'category',
          axisLabel:{
            show:false
          },
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          // data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

           data:userData.map(d => `${d.month}`)

        },
        yAxis: {
          type: 'value',
          axisLabel:{
            show:false
          },
          splitLine:{
            show:false
          }
        },
        series: [
          {
            barWidth:10,
            barGap:"0%",
            data: userData.map((month) => month.count),


            type: 'bar'
          }
        ]
      };




    const newVisitorChart = {
        grid: {
            width: '60%',
            height: '55%',
            left: '20%',
            top: '5%',


          },

            xAxis: {
              type: 'category',
              axisLabel:{
                show:false
              },
              axisTick:{
                show:false
              },
              axisLine:{
                show:false
              },
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              axisLabel:{
                show:false
              },
              splitLine:{
                show:false
              },
              type: 'value'
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
              },

            ]

    }


   const totalOrder = {
    grid: {
        width: '60%',
        height: '55%',
        left: '20%',
        top: '5%',
        bottom:'5%'
      },
        xAxis: {
          type: 'category',
          axisLabel:{
            show:false
          },
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          boundaryGap: false,
          data:orderData.map(d => `Month ${d.month}`)
        },
        yAxis: {
          axisLabel:{
            show:false
          },
          splitLine:{
            show:false
          },
          type: 'value'
        },
        series: [
          {
            data: orderData.map((month) => month.count),
            type: 'line',
            areaStyle: {}
          }
        ]
      };

      const salesByYear = {
         grid:{
          top:"10",
          bottom:"20"
         },

            xAxis: {
              type: 'category',
              data: orderData.map(d => `${d.month}`)
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: orderData.map((month) => month.count),
                type: 'line',
                smooth: true
              },

            ]

    }

    var total = 0;
    for(var i = 0;i<userData.length ; i++){
      total += userData[i].count
    }

    var totalOrderData = 0;
    for(var i = 0;i<orderData.length ; i++){
      totalOrderData += orderData[i].count
    }



      return (
        <>
      <Toast ref={toast} />
      {
 Autoticate ?
 <div>
    <AdminTopNav loginData={loginUserData} />
    <div className='containers'>
    <div className='sidenav'>
      <AdminSidebar />
      </div>
      <div className='content    p-3'>
    <div className='row gap-3 tilechart '>
     <div className='col-md-4 border p-3 ' >
       <h1>{total}</h1>
       <p>Online SignUp</p>
       <div style={{height: "200px"}}>
      <EChartsReact option={onlineSignupChart}/>
      </div>
     </div>
     <div className='col-md-4 border p-3' >
     <h1>71,583</h1>
       <p>New Total Visitor </p>
       <div  style={{ height: '100px', width: '100%' }}>
      <EChartsReact option={newVisitorChart}/>
      </div>
     </div>
     <div className='col-md-3 p-3 border ' >
     <h1>{totalOrderData}</h1>
       <p>Monthly Total Order</p>
      <EChartsReact option={totalOrder}/>
     </div>

     </div>
     <div className="border p-3 mt-3"  >
      <h3>Sales of the Year</h3>
      <EChartsReact option={salesByYear}/>
     </div>
      </div>
      </div>
    </div>
        : <CustomerLogin />
      }

        </>


  )
}

export default AdminProfile