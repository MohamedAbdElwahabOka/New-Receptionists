'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
function Patient_list({Patients ,receptionistRegNum}) {

  const [searchPatients, setSearchPatients] = useState('');
  const router  = useRouter();
  console.log(receptionistRegNum)

  const filteredPatients = Patients.filter(Patient => {
    return Patient?.attributes?.Name.toLowerCase().includes(searchPatients.toLowerCase()) ||
    Patient?.attributes?.reg_Num.toLowerCase().includes(searchPatients.toLowerCase())||
    Patient?.attributes?.phone.toLowerCase().includes(searchPatients.toLowerCase())||
    Patient?.attributes?.Governorate.toLowerCase().includes(searchPatients.toLowerCase())

  });


  return (
    <div className="flex h-screen bg-gray-100 ">
      <div className="flex-1 px-10 py-6">
        <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Patient List</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchPatients}
          onChange={(e) => setSearchPatients(e.target.value)}
          className="w-64 px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-auto"
        />
      </div>
        <div className="overflow-auto rounded-lg shadow max-h-[500px]">
          <table className="w-full bg-gray-200">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Governorate</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.length > 0 ? (
              
              filteredPatients.map((Patient,index)=>(
                <tr key={index} >
                 <td className="px-4 py-2 text-center">
                 
                    {Patient?.attributes?.reg_Num}
                
                </td>
                <td className="px-4 py-2 text-center">
                 
                    {Patient?.attributes?.Name}
              
                </td>
                
                <td className="px-4 py-2 text-center">
                 
                    {Patient?.attributes?.phone}
                 
                </td>
                <td className="px-4 py-2 text-center">
                 
                    {Patient?.attributes?.Governorate}
                  
                </td>
                <td className="px-4 py-2 text-center">
                <button className="px-3 py-1 rounded-md bg-blue-500 text-white mx-auto" variant="ghost"
                onClick={()=>{router.push(`/MakeApp/${receptionistRegNum}?P=MakeApp&PatientRegNum=${Patient?.attributes?.reg_Num}&name=${Patient?.attributes?.Name}`);}}
                >Make app </button>
                </td>
                
                </tr>

              ))):(
              <div className="flex justify-center items-center w-full h-96">
                <h1 className="text-2xl text-gray-500">No Patients Found</h1>
              </div>
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
  )
}

export default Patient_list



// <tr>
// <td className="px-4 py-2">598983014</td>
// <td className="px-4 py-2">Mariam Khaled</td>
// <td className="px-4 py-2">+20 01265432101</td>
// <td className="px-4 py-2">28-Jan-2024 at 10:30 AM</td>
// <td className="px-4 py-2">
//   <span className="px-2 py-1 rounded-md bg-yellow-300 text-gray-800">Waiting</span>
// </td>
// <td className="px-4 py-2">
//   <button className="mr-2">Pay Now</button>
// </td>
// <td className="px-4 py-2">
  
// </td>
// </tr>


