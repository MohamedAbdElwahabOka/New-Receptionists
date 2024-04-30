import Image from "next/image";
import Link from "next/link";

import logo from '/public/logo.svg'
import avatar from '/public/avatar-patient.png'
import manage from '/public/Appointment.png'
import doctor from '/public/doctor.png'
import addapp from '/public/appointment-icon-png-27.jpg'
import list from '/public/list-icon-png-19.jpg';

export default function Front_page({ReceptionistRegNum}){

  

  console.log(ReceptionistRegNum)
    return(
        <div className="min-h-screen bg-gray-100 p-10">
        <div className="flex items-center space-x-4 ">
                <Image src={logo} width={70} height={70} className="text-blue-500 ml-10" />
              </div>
              <div className="flex items-center space-x-4 ">
                <h2 className="text-3xl font-bold text-blue-500 mt-5">TelEgyCare</h2>
              </div>
        <main className="py-12 px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                href="NewPatient"
              >
                <Image
                  src={avatar}
                  alt="New Patient"
                  className="rounded-full"
                  height={80}
                  width={80}
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">New Patient</h3>
              </Link>
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                href="MakeApp"
              >
                <Image
                  alt="Existing Patient"
                  className="rounded-full"
                  height={80}
                  src={addapp}
                  width={80}
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Make Appointment</h3>
              </Link>
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                href="Doctors"
              >
                <Image
                  alt="Hospital"
                  className="rounded-full"
                  height={80}
                  src={doctor}
                  width={80}
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Doctors</h3>
              </Link>
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                href="ManageApp"
              >
                <Image
                  alt="Hospital"
                  className="rounded-full"
                  height={80}
                  src={manage}
                  width={80}
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Manage Appointments</h3>
              </Link>

              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                href="PatientList"
              >
                <Image
                  alt="Hospital"
                  className="rounded-full"
                  height={80}
                  src={list}
                  width={80}
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Patient List</h3>
              </Link>
            </div>
            
          </div>
        </main>
      </div>
    )
}