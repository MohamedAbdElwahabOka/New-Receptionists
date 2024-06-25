"use client"
import Image from "next/image";
import PostPatient from '../../_Utils/PostPatient';
import logo from '/public/logo.svg'
import Swal from 'sweetalert2'
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PatientAPI from '../../_Utils/PatientAPI';
import crypto from 'crypto';

const New_patient = ({ ReceptionistsRegNum }) => {


  const router = useRouter();
  const formRef = useRef();
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Birth_Date, setBirth_Date] = useState('');
  const [Governorate, setGovernorate] = useState('Cairo');
  const [NationalId, setNationalId] = useState('');
  const [City, setCity] = useState('');
  const [Street, setStreet] = useState('');
  const [Gender, setGender] = useState('Male');
  const [Blood_Type, setBlood_Type] = useState('A++');


  const [Patients, setPatients] = useState([]);

  useEffect(() => {
    getPatient_();
  }, [])

  const getPatient_ = () => {
    PatientAPI.getPatient().then(res => {
      console.log(res.data.data);
      setPatients(res.data.data);

    })
  }



  const generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 900000 + 100000);
    return randomNumber;
  }

  let valid_Patient_Reg_num = 0;
  let reg;

  while (!valid_Patient_Reg_num) {
    reg = generateRandomNumber();

    const user = Patients.find(
      (item) => item?.attributes?.reg_Num && item.attributes.reg_Num.substring(1) === reg.toString()
    );

    if (!user) {
      valid_Patient_Reg_num = reg;
      console.log('Valid Reg num:', valid_Patient_Reg_num);
    } else {
      console.log('Not valid reg num, trying again...');
    }
  }

  console.log(valid_Patient_Reg_num)

  function hashPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
    const hashedPassword = hashPassword(`P${valid_Patient_Reg_num}`)

    const data = {
      data: {
        reg_Num: `P${valid_Patient_Reg_num}`,
        Password: hashedPassword,
        Name: Name,
        Email: Email,
        phone: Phone,
        Birth_Date: Birth_Date,
        Governorate: Governorate,
        NationalId: NationalId,
        City: City,
        Street: Street,
        Gender: Gender,
        Blood_Type: Blood_Type
      }
    }
    //   PostPatient.addPatient(data).then((res) => {
    //     console.log('done');
    //     console.log(res);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // };
    Swal.fire({
      title: 'Loading...',
      html: '<img class="my-loading-gif" src="/heart_loading.gif" alt="Loading..." />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      customClass: {
        popup: 'my-custom-popup'
      }
    });
    PostPatient.addPatient(data).then((res) => {
      console.log(res)
      Swal.close();
      Swal.fire({
        title: "Congratulations",
        text: "A new patient has been successfully registered",
        icon: "success"
      });


      // sendEmail();
    }).catch((error) => {
      console.log(error)
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was an error recording, try again"
      });

    });
    return true
  };



  return (
    <div className="max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6">
      <div className="text-center mb-16">
        <a href="javascript:void(0)"><Image
          width={50} height={50}
          src={logo} alt="logo" className='inline-block' />
        </a>
        <h4 className="text-3xl font-bold mb-3 text-blue-600 mt-1">Enter New Patient Details</h4>
      </div>
      <form ref={formRef}>
        <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12">
          <div>
            <label className="text-sm mb-2 block">Full Name</label>
            <input
              required
              name="name"
              type="text"
              className="border-2 border-gray-300 bg-[#fff]-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Enter full name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Email</label>
            <input
              required
              name="email"
              type="email"
              className="border-2 border-gray-300 bg-[#fff]-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Phone</label>
            <input
              required
              name="phone"
              type="text"
              className="border-2 border-gray-300 bg-[#fff]-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Enter phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Birth Date</label>
            <input
              required
              name="BirthDate"
              type="date"
              className="border-2 border-gray-300 bg-[#fff]-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              value={Birth_Date}
              onChange={(e) => setBirth_Date(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">National ID</label>
            <input
              name="NationalID"
              type="text"
              className="border-2 border-gray-300 bg-[#fff]-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              placeholder="Enter National Id"
              value={NationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Blood Type</label>
            <select
              required
              name="Blood Type"
              className="border-2 border-gray-300 bg-[#fff]-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              value={Blood_Type}
              onChange={(e) => setBlood_Type(e.target.value)}>
              {/* <option value="">Select Blood Type</option> */}
              <option selected value="A+">A+</option>
              <option value="A+">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div>
            <label className="text-sm mb-2 block">Address</label>
            <div className="flex space-x-4">
              <select
                required
                name="Governorate"
                className="border-2 border-gray-300 bg-[#fff]-100 w-1/3 text-sm px-4 py-3.5 rounded-md outline-blue-500"
                value={Governorate}
                onChange={(e) => setGovernorate(e.target.value)}
              >
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Qalyubia">Qalyubia</option>
                <option value="Sharqia">Sharqia</option>
                <option value="Dakahlia">Dakahlia</option>
                <option value="Gharbia">Gharbia</option>
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
                required
                name="City"
                type="text"
                className="border-2 border-gray-300 bg-[#fff]-100 w-1/3 text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="City"
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                required
                name="Street"
                type="text"
                className="border-2 border-gray-300 bg-[#fff]-100 w-1/3 text-sm px-4 py-3.5 rounded-md outline-blue-500"
                placeholder="Street"
                value={Street}
                onChange={(e) => setStreet(e.target.value)}

              />
            </div>
          </div>
          <div>
            <label className="text-sm mb-2 block">Gender</label>
            <select
              required
              name="Gender"
              className="border-2 border-gray-300 bg-[#fff]-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

        </div>
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={(e) => {
              handleSubmit(e)
              router.push(`/PatientList/${ReceptionistsRegNum}?P=PatientList`);
            }}
            type="submit"
            disabled={!Name || !Email || !Phone || !Birth_Date || !Governorate || !City || !Street || !Gender || !Blood_Type}
            className={`min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none ${(!Name || !Email || !Phone || !Birth_Date || !Governorate || !City || !Street || !Gender || !Blood_Type) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Add New Patient
          </button>

          <button
            onClick={(e) => {
              handleSubmit(e)
              router.push(`/MakeApp/${ReceptionistsRegNum}?PatientRegNum=${valid_Patient_Reg_num}&name=${Name}`);
            }}
            type="submit"
            disabled={!Name || !Email || !Phone || !Birth_Date || !Governorate || !City || !Street || !Gender || !Blood_Type}
            className={`min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none ${(!Name || !Email || !Phone || !Birth_Date || !Governorate || !City || !Street || !Gender || !Blood_Type) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Add Patient and make Appointment
          </button>
        </div>
      </form>
    </div>
  )
}

export default New_patient
