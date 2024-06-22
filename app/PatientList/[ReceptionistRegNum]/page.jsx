'use client'
import Patient_list from '../_components/Patient_list';
import Sidebar from '../../_components/Sidebar'
import PatientAPI from '../../_Utils/PatientAPI';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withAuth from '../../_Utils/withAuth';


function page({params}){
  console.log(params)
  const [Patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPatient_();
  },[])

  const getPatient_ = () => {
    
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
    PatientAPI.getPatient()
      .then(res => {
        console.log(res.data.data);
        setPatients(res.data.data);
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
        reg={params.ReceptionistRegNum}
        className="w-64 bg-gray-800 text-white px-4 py-8" />
        <div className="flex-grow bg-gray-100 p-8">
          {
          isLoading ?(
          <div className="flex items-center justify-center min-h-screen">
          <h1>Loading...</h1></div>)
          :(
          <Patient_list Patients={Patients} receptionistRegNum={params.ReceptionistRegNum}
          />)}
        </div>
      </div>
    </div>
    )
}

export default withAuth(page)
