'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Table({data}) {
   
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Patient List</h1>
        <input
          type="text"
          placeholder="Search..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64 px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-auto"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full ">
          <thead>
            <tr className=" text-black">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Marital Status</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Make App</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
            
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-transparent'}>
                {item?.attributes?.pres_state == 1 ? <>

                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}`}>
                    ss
                    {/* {console.log(item)}
                    {console.log(item?.attributes?.patient?.data?.attributes?.Name)}
                    {console.log(item.id)} */}
                    {/* { console.log(item?.attributes?.pres_state)} */}
                  </Link>
                </td>
                
                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}`}>
                    
              ss
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}`}>
               ss
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}`}>
                  ss
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}`}>
                   ss
                  </Link>
                </td>
                
                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}`}>
                    
               ss
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/patient-details/${item?.attributes?.patient?.data?.id}`}>
                    ss
                    
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href='MakeApp'>
                    Make Appointment
                  </Link>
                </td>
                </> : <></>}
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
