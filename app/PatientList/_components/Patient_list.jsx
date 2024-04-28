
// 'use client'
// import React, { useEffect, useState } from 'react';


// const patients_list = [
//   {
//     name: "Adeline Runte",
//     id: "1",
//     email: "Gm@email.com",
//     phone_num: "010000000",
//     Gender: "female",
//     address: "Aswan",
//     Marital_Status: "single",
//   },
//   {
//     name: "Maxime Walter",
//     id: "2",
//     email: "Gm@email.com",
//     phone_num: "010000000",
//     Gender: "female",
//     address: "Aswan",
//     Marital_Status: "single",
//   },
//   {
//     name: "Elwin Bins",
//     id: "3",
//     email: "Gm@email.com",
//     phone_num: "010000000",
//     Gender: "female",
//     address: "Aswan",
//     Marital_Status: "single",
//   },
//   {
//     name: "Gavin Ruecker",
//     id: "4",
//     email: "Gm@email.com",
//     phone_num: "010000000",
//     Gender: "female",
//     address: "Aswan",
//     Marital_Status: "single",
//   },
//   {
//     name: "Bernie Wuckert",
//     id: "5",
//     email: "Gm@email.com",
//     phone_num: "010000000",
//     Gender: "female",
//     address: "Aswan",
//     Marital_Status: "single",
//   },
//   {
//     name: "Ms. Yvonne Johns",
//     id: "6",
//     email: "Gm@email.com",
//     phone_num: "010000000",
//     Gender: "female",
//     address: "Aswan",
//     Marital_Status: "single",
//   },
//   {
//     name: "Martina Rau",
//     id: "7",
//     email: "Gm@email.com",
//     phone_num: "010000000",
//     Gender: "female",
//     address: "Aswan",
//     Marital_Status: "single",
//   },
//   {
//     name: "Prof. Joannie Breitenberg",
//     id: "8",
//     email: "Gm@email.com",
//     phone_num: "010000000",
//     Gender: "female",
//     address: "Aswan",
//     Marital_Status: "single",
//   },
//   {
//     name: "Joanne Mraz",
//     id: "9",
//     email: "Gm@email.com",
//     phone_num: "010000000",
//     Gender: "female",
//     address: "Aswan",
//     Marital_Status: "single",
//   },
//   {
//     name: "Katelynn Hoeger",
//     id: "10",
//     email: "Gm@email.com",
//     phone_num: "010000000",
//     Gender: "female",
//     address: "Aswan",
//     Marital_Status: "single",
//   },
// ];

'use client'
import { useEffect, useState } from 'react';
import Table from './Table';
import PatientAPI from '@/app/_Utils/PatientAPI';

function Patient_list({data}) {



  const [patients, setPatients] = useState([]);
  useEffect(() => {
    getPatients_();
  }, [data])

  const getPatients_ = () => {
    PatientAPI.getPatient(data).then(res => {
      console.log(res.data.data);
      setPatients(res.data.data);
      

    })
  }

    // const [data, setData] = useState([]); 
    
    // useEffect(() => {
    //     const fetchedData = [
    //       {
    //         "Registrationnumber": "R123456",
    //         "Name": "John Doe",
    //         "Phone": "+1234567890",
    //         "Email": "john.doe@example.com",
    //         "Address": "123 Main St, City, Country"
    //       },
    //       {
    //         "Registrationnumber": "R987654",
    //         "Name": "Jane Smith",
    //         "Phone": "+1987654321",
    //         "Email": "jane.smith@example.com",
    //         "Address": "456 Elm St, Town, Country"
    //       },
    //       {
    //         "Registrationnumber": "R654321",
    //         "Name": "Alice Johnson",
    //         "Phone": "+1122334455",
    //         "Email": "alice.johnson@example.com",
    //         "Address": "789 Oak St, Village, Country"
    //       },
    //       {
    //         "Registrationnumber": "R321654",
    //         "Name": "Bob Brown",
    //         "Phone": "+9876543210",
    //         "Email": "bob.brown@example.com",
    //         "Address": "321 Pine St, Hamlet, Country"
    //       }
    //     ];
    
    //     setData(fetchedData);
    // }, []);
    
  return (
    <div>
        <Table data={patients} />
     
    </div>
  )
}

export default Patient_list


// export default function Patient_list(data) {
//   const [filteredData, setFilteredData] = useState(data);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         if (searchTerm) {
//           const filtered = data.filter((item) =>
//             Object.values(item)
//               .join('')
//               .toLowerCase()
//               .includes(searchTerm.toLowerCase())
//           );
//           setFilteredData(filtered);
//         } else {
//           setFilteredData(data);
//         }
//       }, [searchTerm, data]);
//   return (
//     <div className="flex h-screen bg-gray-100 ">
//       <div className="flex-1 px-10 py-6">
//         <div className="flex justify-between mb-4">
//         <h1 className="text-2xl font-bold text-blue-600">Patients List</h1>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-64 px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-auto"
//         />
//       </div>
//         <div className="overflow-auto rounded-lg shadow">
//           <table className="w-full bg-gray-200">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">ID</th>
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">Phone Number</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Marital Status</th>
//                 <th className="px-4 py-2">Gender</th>
//                 <th className="px-4 py-2">Address</th>
//               </tr>
//             </thead>
//             <tbody>
//             {patients_list.map((item) => ( 
//               <tr className="m-2">
              
//                 <td className="px-4 py-2">{item.id}</td>
//                 <td className="px-4 py-2">{item.name}</td>
//                 <td className="px-4 py-2">{item.phone_num}</td>
//                 <td className="px-4 py-2">{item.email}</td>
//                 <td className="px-4 py-2">{item.Marital_Status}</td>
//                 <td className="px-4 py-2">{item.Gender}</td>
//                 <td className="px-4 py-2">{item.address}</td>
//                 <td className="px-4 py-2">
//                 </td>
//               </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="flex justify-between items-center mt-4">
//           <div className="flex space-x-1">
//             <button className="px-3 py-1 rounded-md bg-blue-500 text-white" variant="ghost">1</button>
//             <button className="px-3 py-1 rounded-md" variant="ghost">2</button>
//             <button className="px-3 py-1 rounded-md" variant="ghost">3</button>
//             <button className="px-3 py-1 rounded-md" variant="ghost">Next</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }