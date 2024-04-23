  "use client"
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

function New_patient() {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };
 
  const handleChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };
 
  const handleRemove = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Files uploaded successfully');
      } else {
        alert('Failed to upload files');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to upload files');
    }
  };

  return (
    <div className="flex h-screen">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-500">Enter New Patient Details</h2>
          <form className="grid grid-cols-2 gap-x-16 gap-y-4">

            <input id="name" placeholder="Full Name" className="border rounded-md p-2" />
            {/* <input id="last-name" placeholder="Last Name" className="border rounded-md p-2" /> */}



            <div className="flex items-center">
              <select className="border rounded-md p-2">
                <option value="+20">+20</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input id="phone-number" placeholder="+20 (00) 000-00-00" type="tel" className="flex-1 border rounded-md p-2" />
            </div>


            <input id="email" placeholder="Email" type="email" className="border rounded-md p-2" />



            {/* <input id="marital-status" placeholder="Enter Marital Status" className="border rounded-md p-2" /> */}

            <div className="flex items-center">
              <input type="date" id="dob" placeholder="10-1-2024" className="border rounded-md p-2" />
            </div>

            <input id="national-id" placeholder="Enter your National ID" className="border rounded-md p-2" />


            <div className="grid grid-cols-3 gap-4 col-span-2">
              <select id="address-governorate" placeholder="Governorate" className="border rounded-md p-2">
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Qalyubia">Qalyubia</option>
              <option value="Sharqia">Sharqia</option>
              <option value="Dakahlia">Dakahlia</option>
              <option value ="Gharbia">Gharbia</option>
              <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
              <option value="Monufia">Monufia</option>
              <option value="Red Sea">Red Sea</option>
              <option value="New Valley">New Valley</option>
              <option value="Sohag">Sohag</option>
              <option value="Qena">Qena</option>
              <option value="Luxor">Luxor</option>
              <option value="Aswan">Aswan</option>
              <option value="Beni Suef">Beni Suef</option>
              <option value="Faiyum">Faiyum</option>
              <option value="Minya">Minya</option>
              <option value="Asyut">Asyut</option>
              <option value="Wadi">Wadi</option>
              <option value="South Sinai">South Sinai</option>
              <option value="North Sinai">North Sinai</option>
              <option value="Damietta">Damietta</option>
              <option value="Port Said">Port Said</option>
              <option value="Ismailia">Ismailia</option>
              <option value="Suez">Suez</option>
              <option value="Matruh">Matruh</option>
              <option value="New Alexandria">New Alexandria</option>
              <option value="New Capital">New Capital</option>
              </select>
              <input id="address-city" placeholder="City" className="border rounded-md p-2" />
              <input id="address-street" placeholder="Street" className="border rounded-md p-2" />
            </div>

            <div >
            <select className="border rounded-md p-2">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
                </div>
            <div className="col-span-2 flex flex-col justify-center items-center ">
              {/* <label className="text-sm font-medium leading-none mb-2" htmlFor="upload">
                Upload the National ID
              </label> */}
              {/* <div className="max-w-md mx-auto mt-2 border border-gray-300 p-4 rounded-md shadow-md file-uploader">
      <div
        className="h-55 border-dashed border-2 border-gray-300 border-2 rounded-lg flex flex-col justify-center items-center drop-zone"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()} */}
      
        {/* <div className="text-gray-500 text-xl">Drag and drop files here</div> */}
        {/* <div className="text-gray-500">or</div> */}
        {/* <label
          htmlFor="file-input"
          className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
        >
          Browse files
        </label> 
        <input
          type="file"
          id="file-input"
          multiple
          className="hidden"
          onChange={handleChange}
        /> 
      </div>
      <div className="mt-2">
        <ul className="list-disc list-inside">max-w-md mx-auto mt-2 border border-gray-300 p-4 rounded-md shadow-md file-uploader
          {files.map((file, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">{file.name}</span>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    {/* </div>   */}
    <div className="flex justify-center w-full">
    <button className="w-20 h-10 m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-1 border-b-4 border-blue-700 hover:border-blue-500 rounded ">Save</button>
    <Link href='ManageApp'className="w-30 h-10 m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded ">Save & Manage</Link>
  </div>
              </div>
              </form>
          </div>
      </div>
    )
  }

  export default New_patient