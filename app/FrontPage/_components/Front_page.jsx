"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import logo from '/public/logo.svg'
import avatar from '/public/avatar-patient.png'
import manage from '/public/Appointment.png'
import doctor from '/public/doctor.png'
import addapp from '/public/appointment-icon-png-27.jpg'
import list from '/public/list-icon-png-19.jpg';
import ReceptionAPI from '../../_Utils/ReceptionAPI';
import { useEffect, useState } from "react";



export default function Front_page({ReceptionistRegNum}){

  const router = useRouter();

  // console.log(ReceptionistRegNum)



  const [receptionistNameByRegistrationNumber, setReceptionistNameByRegistrationNumber] = useState([]);
  useEffect(() => {
    getReceptionistByRegistrationNumber_();
  }, [])

  const getReceptionistByRegistrationNumber_ = () => {
    ReceptionAPI.getReceptionistByRegistrationNumber(ReceptionistRegNum).then(res => {
      // console.log(res.data.data);
      setReceptionistNameByRegistrationNumber(res.data.data);
    })
  }


    return(
        <div className="min-h-screen bg-gray-100 p-10">
        <div className="flex items-center space-x-4 ">
                <Image src={logo} width={70} height={70} className="text-blue-500 ml-10" />
              </div>
              <div className="flex items-center space-x-4 ">
                <h2 className="text-3xl font-bold text-blue-500 mt-5">TelEgyCare</h2>
          
              </div>
              <div className="flex items-center space-x-4 ">
                <h3 className="text-2xl font-bold text-blue-500 mt-5">Hello, {receptionistNameByRegistrationNumber[0]?.attributes?.Name}</h3>
              </div>
        <main className="py-12 px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-white  shadow-lg rounded-xl p-6 hover:bg-gray-100  transition-colors"
                // OnClick={router.push(`/NewPatient/${ReceptionistRegNum}`)}
                href='/NewPatient/[$id]' as={`/NewPatient/${ReceptionistRegNum}`}>
              
                <Image
                  src={avatar}
                  alt="New Patient"
                  className="rounded-full"
                  height={80}
                  width={80}
                />
                <h3 className="text-xl font-bold text-gray-800">New Patient</h3>
              </Link>
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-white  shadow-lg rounded-xl p-6 hover:bg-gray-100  transition-colors"
                // href="MakeApp"
                href='/MakeApp/[$id]' as={`/MakeApp/${ReceptionistRegNum}`}
              >
                <Image
                  alt="Existing Patient"
                  className="rounded-full"
                  height={80}
                  src={addapp}
                  width={80}
                />
                <h3 className="text-xl font-bold text-gray-800">Make Appointment</h3>
              </Link>
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-white  shadow-lg rounded-xl p-6 hover:bg-gray-100 transition-colors"
                // href="Doctors"
                href='/Doctors/[$id]' as={`/Doctors/${ReceptionistRegNum}`}
              >
                <Image
                  alt="Hospital"
                  className="rounded-full"
                  height={80}
                  src={doctor}
                  width={80}
                />
                <h3 className="text-xl font-bold text-gray-800">Doctors</h3>
              </Link>
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-white  shadow-lg rounded-xl p-6 hover:bg-gray-100 transition-colors"
                // href="ManageApp"
                href='/ManageApp/[$id]' as={`/ManageApp/${ReceptionistRegNum}`}
              >
                <Image
                  alt="Hospital"
                  className="rounded-full"
                  height={80}
                  src={manage}
                  width={80}
                />
                <h3 className="text-xl font-bold text-gray-800">Manage Appointments</h3>
              </Link>

              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-white  shadow-lg rounded-xl p-6 hover:bg-gray-100 transition-colors"
                // href="PatientList"
                href='/PatientList/[$id]' as={`/PatientList/${ReceptionistRegNum}`}
              >
                <Image
                  alt="Hospital"
                  className="rounded-full"
                  height={80}
                  src={list}
                  width={80}
                />
                <h3 className="text-xl font-bold text-gray-800">Patient List</h3>
              </Link>
            </div>
            
          </div>
        </main>
      </div>
    )
}