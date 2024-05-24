'use client'
import Manage_app from '../_components/Manage_app';
import Sidebar from '../../_components/Sidebar'
import Swal from 'sweetalert2'
import React, { useEffect, useState } from 'react'
import AppointmentsAPI from '@/app/_Utils/AppointmentsAPI';
export default function page({params}){

  console.log(params.recepRegNum)
  const [Appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  
  useEffect(() => {
    getAppointments_();
  },[])

  const getAppointments_ = () => {
    Swal.fire({
      title: 'Loading...',
      html: '<img class="my-loading-gif" src="/heart_loading.gif" alt="Loading..." />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      customClass: {
        popup: 'my-custom-popup'
      }
    });
    AppointmentsAPI.getAppointments()
    .then(res => {
      console.log(res.data.data);
      setAppointments(res.data.data);
      setIsLoading(false);
      Swal.close();
      
    })
    .catch(err => {
      console.error(err);
      setIsLoading(false);
      Swal.close();
      // Handle error appropriately
    });

  }
    return(
    <div>
      <div className="flex h-screen">  
        <Sidebar 
        reg={params.recepRegNum}
        className="w-64 bg-gray-800 text-white px-4 py-8" />
        <div className="flex-grow bg-gray-100 p-8">
          {
        isLoading ?(
          
          <div className="flex items-center justify-center min-h-screen">
          <h1></h1></div>)

          
          :(<Manage_app Appointments={Appointments}/>)
            
          }


        


        </div>
      </div>
    </div>
    )
}