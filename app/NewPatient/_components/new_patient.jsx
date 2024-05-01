  "use client"
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import name from '/public/name.jpg';
import phone from '/public/phone.png';
import id from '/public/national.png';
import email from '/public/email.png';
import blood from '/public/blood.png';
import bd from '/public/th.jpg';
import gender from '/public/Gender-Symbol-PNG.png';
import PostPatient from '../../_Utils/PostPatient';

const New_patient = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Birth_Date, setBirth_Date] = useState('');
  const [Governorate, setGovernorate] = useState('');
  const [NationalId, setNationalId] = useState('');
  const [City, setCity] = useState('');
  const [Street, setStreet] = useState('');
  const [Gender, setGender] = useState('');
  const [Blood_Type, setBlood_Type] = useState('');

  // const [Password, setPassword] = useState('');
  // const [VerifyPassword, setVerifyPassword] = useState('');
  // const [UploadLicense, setUploadLicense] = useState('');
  // const [Profileimage, setProfileimage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      data:{
        Name : Name,
        Email : Email,
        phone : Phone,
        Birth_Date : Birth_Date,
        reg_Num : "P27430"+1 ,
        Governorate: Governorate,
        NationalId : NationalId,
        City : City,
        Street : Street,
        Gender : Gender,
        Blood_Type : Blood_Type,
        Password : "P27430"+1 ,
        // LicenseImg: UploadLicense
      }
    }
    PostPatient.addPatient(data).then((res) => {
      console.log('done');
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });

  };

  return (
    <div className="flex h-screen">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Enter New Patient Details</h2>
        <form onSubmit={(e)=> handleSubmit(e)} >
          <div className="flex items-center">
            <Image className='m-3' src={name} width={20} height={20}/>
             <label htmlFor="name" className="mr-2">Full Name:</label>
             <input 
             id="name" 
             placeholder="Full Name" 
             className="border rounded-md p-2 m-2"
             required 
             value={Name}
             onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="flex items-center w-80">
            <Image className='m-3' src={phone} width={20} height={20}/>
            <label htmlFor="phone-number" className="mr-2">Phone Number:</label>
              <input 
              id="phone-number" 
              placeholder="+20 (00) 000-00-00" 
              type="tel" 
              className="flex-1 border rounded-md p-2 m-2"
              required 
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            
            <div className="flex items-center">
            <Image className='m-3' src={email} width={20} height={20}/>
             <label htmlFor="email" className="mr-2">E-mail:</label>
             <input 
             id="email" 
             placeholder="Email" 
             type="email" 
             className="border rounded-md p-2 m-2" 
             required
             value={Email}
             onChange={(e) => setEmail(e.target.value)}
             />
            </div>


            <div className="flex items-center">
            <Image className='m-3' src={bd} width={20} height={20}/>
            <label htmlFor="dob" className="mr-2">Birth Date:</label>
              <input 
              type="date" 
              id="dob" placeholder="10-1-2024" 
              className="border rounded-md p-2 m-2"
              value={Birth_Date}
             onChange={(e) => setBirth_Date(e.target.value)}
              required />
            </div>

            <div className="flex items-center">
            <Image className='m-3' src={id} width={20} height={20}/>
              <label htmlFor="national-id" className="mr-2">National ID:</label>
              <input 
              id="national-id" 
              placeholder="Enter your National ID" 
              className="border rounded-md p-2 m-2"
              value={NationalId}
             onChange={(e) => setNationalId(e.target.value)}
              required />
            </div>

            <div className="flex items-center">
            <Image className='m-3' src={blood} width={20} height={20}/>
              <label htmlFor="national-id" className="mr-2">Blood Type:</label>
              <input 
              id="blood-type" 
              placeholder="Enter your blood type" 
              className="border rounded-md p-2 m-2"
              value={Blood_Type}
              onChange={(e) => setBlood_Type(e.target.value)}
              />
            </div>

            <div className="flex items-center p-2 m-2">
            <Image src={name} width={20} height={20} className="m-2"/>
            <label htmlFor="address">Address:</label>
              <select 
              id="address-governorate" 
              placeholder="Governorate" 
              className="w-30 border rounded-md p-2 m-2" 
              value={Governorate}
              onChange={(e) => setGovernorate(e.target.value)}
              required>
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
              <input 
              id="address-city" 
              placeholder="City" 
              className="w-30 border rounded-md p-2 m-2" 
              value={City}
              onChange={(e) => setCity(e.target.value)}
              />
              <input 
              id="address-street"
               placeholder="Street" 
               className="w-30 border rounded-md p-2 m-2" 
               value={Street}
               onChange={(e) => setStreet(e.target.value)}
               />
            </div>

            <div className="flex items-center">
            <Image className='m-3' src={gender} width={20} height={20}/>
            <label htmlFor="gender" >Gender:</label>
            <select 
            className="border rounded-md p-2 m-2" 
            value={Gender}
            onChange={(e) => setGender(e.target.value)}
            required>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
                </div>
            <div className="col-span-2 flex flex-col justify-center items-center ">
            
                 <div className="flex justify-center w-full">
                <button onClick={(e)=> handleSubmit(e)} className="w-20 h-10 m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-1 border-b-4 border-blue-700 hover:border-blue-500 rounded ">Save</button>
               <button className="w-30 h-10 m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded ">Save & Make</button>
  </div>
              </div>
              </form>
          </div>
      </div>
    )
  }

  export default New_patient
