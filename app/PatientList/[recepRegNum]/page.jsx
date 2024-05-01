'use client'
import Patient_list from '../_components/Patient_list';
import Sidebar from '../../_components/Sidebar'
import PatientAPI from '../../_Utils/PatientAPI';
import React, { useEffect, useState } from 'react'
export default function page( ){
  const [Patient, setPatient] = useState([]);

  useEffect(() => {
    getPatient_();
  },)
  // params?.doctorRegNum
  const getPatient_ = () => {
    PatientAPI.getPatient().then(res => {
       console.log(res.data.data);
      setPatient(res.data.data);

    })
  }

    return(
    <div>
      <div className="flex h-screen">  
        <Sidebar className="w-64 bg-gray-800 text-white px-4 py-8" />
        <div className="flex-grow bg-gray-100 p-8">
        <Patient_list data={Patient}/>
        </div>
      </div>
    </div>
    )
}