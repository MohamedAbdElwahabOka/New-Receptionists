
'use client'
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import AppointmentsAPI from "@/app/_Utils/AppointmentsAPI"
export default function Manage_app({Appointments}) {

  const [searchAppointments, setSearchAppointments] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    // Fetch your appointments data here
    Appointments
  }, [refreshKey]); 

  console.log(Appointments)

  function convertTo12Hour(time) {
    const [hour, minute] = time.split(':');
    const suffix = +hour >= 12 ? 'PM' : 'AM';
    return `${((+hour + 11) % 12) + 1}:${minute} ${suffix}`;
  }
  function convertDateFormat(dateString) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(dateString);
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName}, ${day},${month},${year}`;
  }


  // console.log(convertTo12Hour())
  const filteredAppointments = Appointments.filter(Appointment => {
    return Appointment?.attributes?.AppointmentID.toLowerCase().includes(searchAppointments.toLowerCase()) ||
    Appointment?.attributes?.date.toLowerCase().includes(searchAppointments.toLowerCase())||
    Appointment?.attributes?.time.toLowerCase().includes(searchAppointments.toLowerCase())||
    Appointment?.attributes?.specializations.toLowerCase().includes(searchAppointments.toLowerCase())||
    Appointment?.attributes?.doctor?.data?.attributes?.Name.toLowerCase().includes(searchAppointments.toLowerCase())||
    Appointment?.attributes?.patient?.data?.attributes?.Name.toLowerCase().includes(searchAppointments.toLowerCase())||
    (searchAppointments.toLowerCase() === 'today' && new Date(Appointment?.attributes?.date).toDateString() === new Date().toDateString())
    // (searchAppointments.toLowerCase() === 'Waiting' && new Date(Appointment?.attributes?.date) > new Date().toDateString());
  });



 function DeleteAppointment(Appid){
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0070CD",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      AppointmentsAPI.deleteAppointment(Appid).then(
        response => {
          console.log(response.data)
          Swal.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
          setRefreshKey(oldKey => oldKey + 1);
        }
      )
      .catch(error => {
        console.error(error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "There was an error recording, try again"
        });})}});}


  return (
    <div key={refreshKey} className="flex h-screen bg-gray-100 ">
      <div className="flex-1 px-10 py-6">
        <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Manage Appointments</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchAppointments}
          onChange={(e) => setSearchAppointments(e.target.value)}
          className="w-64 px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-auto"
        />
      </div>
      <div className="overflow-auto rounded-lg shadow max-h-[500px]">
          <table className="w-full bg-gray-200">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Patient Name</th>
                <th className="px-4 py-2">Appointment Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Doctor</th>
                <th className="px-4 py-2">specializations</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.length > 0 ? (
              filteredAppointments.map((Appointment,index)=>(
                
                <tr key={index} className="border px-4 py-2 text-center">
                  {Appointment?.attributes?.State != '1' ?(<>
                    <td className="whitespace-nowrap px-4 py-2 text-center">
                  {Appointment?.attributes?.AppointmentID}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center w-1/2">
                  {Appointment?.attributes?.patient?.data?.attributes?.Name}
                 
                </td>
                <td className="whitespace-nowrap w-1/2 px-4 py-2 text-center">
                  {convertDateFormat(Appointment?.attributes?.date)}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  {convertTo12Hour(Appointment?.attributes?.time)}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  {Appointment?.attributes?.doctor?.data?.attributes?.Name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  {Appointment?.attributes?.specializations}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                  {new Date(Appointment?.attributes?.date).toDateString() === new Date().toDateString() ? (
                    <span className="px-2 py-1 rounded-md bg-green-500 text-gray-800">Today</span>
                  ) : new Date(Appointment?.attributes?.date) > new Date() ? (
                    <span className="px-2 py-1 rounded-md bg-yellow-500 text-gray-800">Waiting</span>
                  ) : (
                    <span className="px-2 py-1 rounded-md bg-red-500 text-gray-800">Closed</span>
                  )}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center">
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  {/* {Appointment?.id} */}
                  <button 
                  onClick={()=>DeleteAppointment(Appointment?.id)}
                  class="mr-4" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                      <path
                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                        data-original="#000000" />
                      <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                        data-original="#000000" />
                    </svg>
                  </button>
                </div>
                {console.log(new Date(Appointment?.attributes?.date).toDateString() > new Date().toDateString())}
                </td>
                  </>):(
                    <></>
                  )}
              </tr>
              ))):(
              <tr>
              <td colSpan={7} className="px-4 py-2 text-center">
                No Appointments Found
              </td>
               </tr>
              )
            }          
            </tbody>
            
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-700">Showing 1-10 of 100</span>
          <div className="flex space-x-1">
            <button className="px-3 py-1 rounded-md bg-blue-500 text-white" variant="ghost">1</button>
            <button className="px-3 py-1 rounded-md" variant="ghost">2</button>
            <button className="px-3 py-1 rounded-md" variant="ghost">3</button>
            <button className="px-3 py-1 rounded-md" variant="ghost">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}


// <tr key={index} className="border px-4 py-2 text-center">
//                  <td className="px-4 py-2 text-center">
                 
//                  {Appointment?.attributes?.AppointmentID}
                
//                 </td>
//                 <td className="px-4 py-2 text-center w-1/2">
                 
//                     {Appointment?.attributes?.patient?.data?.attributes?.Name}
              
//                 </td>
                
//                 <td className="w-1/2 px-4 py-2 text-center">
//                   {convertDateFormat(Appointment?.attributes?.date)}
//                 </td>
                
//                 <td className="px-4 py-2 text-center">
                 
                
          
//                     {
//                     convertTo12Hour(Appointment?.attributes?.time)}
                 
//                 </td>
//                 <td className="px-4 py-2 text-center">
                 
//                     {Appointment?.attributes?.doctor?.data?.attributes?.Name}
                  
//                 </td>
//                 <td className="w-1/2 px-4 py-2 text-center">
//                 {/* <button className="px-3 py-1 rounded-md bg-blue-500 text-white mx-auto" variant="ghost"
//                 onClick={()=>{router.push(`/MakeApp/${receptionistRegNum}?P=MakeApp&PatientRegNum=${Patient?.attributes?.reg_Num}&name=${Patient?.attributes?.Name}`);}}
//                 >Make app </button> */}
//                 {Appointment?.attributes?.specializations}


//                 </td>
//                 <td>
//                   <span className="px-2 py-1 rounded-md bg-green-500 text-gray-800">Completed</span>
//                 </td>
//                 <td>
//                 <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                   <button class="mr-4" title="Delete">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
//                       <path
//                         d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
//                         data-original="#000000" />
//                       <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
//                         data-original="#000000" />
//                     </svg>
//                   </button>
//                 </div>
//                 </td>
                
//                 </tr>




// <tbody>
//               <tr>
//                 <td className="px-4 py-2">357880357</td>
//                 <td className="px-4 py-2">Mohamed Tarek</td>
//                 <td className="px-4 py-2">+20 01165432100</td>
//                 <td className="px-4 py-2">27-Jan-2024 at 10:00 AM</td>
//                 <td className="px-4 py-2">
//                   <span className="px-2 py-1 rounded-md bg-green-500 text-gray-800">Completed</span>
//                 </td>
//                 <td className="px-4 py-2">
//                   <button className="mr-2">Pay Now</button>
//                 </td>
//                 <td className="px-4 py-2">
//                   {/* <TrashIcon className="h-4 w-4 text-red-500" /> */}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2">598983014</td>
//                 <td className="px-4 py-2">Mariam Khaled</td>
//                 <td className="px-4 py-2">+20 01265432101</td>
//                 <td className="px-4 py-2">28-Jan-2024 at 10:30 AM</td>
//                 <td className="px-4 py-2">
//                   <span className="px-2 py-1 rounded-md bg-yellow-300 text-gray-800">Waiting</span>
//                 </td>
//                 <td className="px-4 py-2">
//                   <button className="mr-2">Pay Now</button>
//                 </td>
//                 <td className="px-4 py-2">
//                   {/* <TrashIcon className="h-4 w-4 text-red-500" /> */}
//                 </td>
//               </tr>
//             </tbody>




// function TrashIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//     </svg>
//   );
// }






