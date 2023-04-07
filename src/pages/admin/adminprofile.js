import React from 'react'
import AdminSidebar from '../../components/adminsidenav.component'
import AdminTopNav from '../../components/admintopnav'
import EChartsReact from 'echarts-for-react'


const AdminProfile = () => {

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
          axisTick:{
            show:false
          },
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
    
            data: [120, 200, 150, 80, 70, 110, 130],
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
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
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
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      };
  return (
    <div>
    <AdminTopNav />
    <div className='containers'>
    <div className='sidenav'>
      <AdminSidebar />
      </div>
      <div className='content tilechart  border p-3'>
    <div className='row gap-3 '>
     <div className='col-md-3 border p-3 ' style={{height:"261px"}}>
       <h1>71,583</h1>
       <p>Online Soping Project</p>
       <div style={{height: "200px", width: "300px"}}>
      <EChartsReact option={onlineSignupChart}/>
      </div>
     </div>
     <div className='col-md-3 border p-3' style={{height:"261px"}}>
     <h1>71,583</h1>
       <p>New Total Visitor </p>
       <div  style={{ height: '100px', width: '100%' }}>
      <EChartsReact option={newVisitorChart}/>
      </div>
     </div>
     <div className='col-md-3 p-3 border ' style={{height:"261px"}}>
     <h1>71,583</h1>
       <p>Monthly Total Order</p>
      <EChartsReact option={totalOrder}/>
     </div>
  
     </div>
     <div>hello</div>
      </div>
      </div>
    </div>
  )
}

export default AdminProfile