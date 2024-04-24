
'use client'
import React, { useEffect, useState } from 'react';

export default function Patient_list(data) {
  const [filteredData, setFilteredData] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (searchTerm) {
          const filtered = data.filter((item) =>
            Object.values(item)
              .join('')
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          );
          setFilteredData(filtered);
        } else {
          setFilteredData(data);
        }
      }, [searchTerm, data]);
  return (
    <div className="flex h-screen bg-gray-100 ">
      <div className="flex-1 px-10 py-6">
        <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Manage Appointments</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64 px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-auto"
        />
      </div>
        <div className="overflow-auto rounded-lg shadow">
          <table className="w-full bg-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Appointment Date & Time</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">357880357</td>
                <td className="px-4 py-2">Mohamed Tarek</td>
                <td className="px-4 py-2">+20 01165432100</td>
                <td className="px-4 py-2">27-Jan-2024 at 10:00 AM</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded-md bg-green-500 text-gray-800">Completed</span>
                </td>
                <td className="px-4 py-2">
                  <button className="mr-2">Pay Now</button>
                </td>
                <td className="px-4 py-2">
                  {/* <TrashIcon className="h-4 w-4 text-red-500" /> */}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">598983014</td>
                <td className="px-4 py-2">Mariam Khaled</td>
                <td className="px-4 py-2">+20 01265432101</td>
                <td className="px-4 py-2">28-Jan-2024 at 10:30 AM</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 rounded-md bg-yellow-300 text-gray-800">Waiting</span>
                </td>
                <td className="px-4 py-2">
                  <button className="mr-2">Pay Now</button>
                </td>
                <td className="px-4 py-2">
                  {/* <TrashIcon className="h-4 w-4 text-red-500" /> */}
                </td>
              </tr>
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