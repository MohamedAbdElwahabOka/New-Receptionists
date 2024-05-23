"use client"
import { useState,useEffect } from 'react';
import Link from "next/link"
import Image from "next/image";
import logo from '/public/logo.svg'
import PostApp from '../../_Utils/AppointmentsAPI';
import { useSearchParams } from 'next/navigation';
import Select from 'react-select';
import PatientAPI from '../../_Utils/PatientAPI'
import HospitalsAPI from '../../_Utils/HospitalsAPI';
import DoctorsAPI from '@/app/_Utils/DoctorsAPI';
import ReceptionAPI from '@/app/_Utils/ReceptionAPI';
import AppointmentsAPI from "@/app/_Utils/AppointmentsAPI"
import Swal from 'sweetalert2'

const Make_app = ({receptionistRegNum}) => {
   
  console.log(receptionistRegNum)
  const searchParams = useSearchParams();
  const PatientRegNum = searchParams.get('PatientRegNum')
  const PatientName = searchParams.get('name')
  const [specializations, setSpecializations] = useState('');
  const [hospital, setHospital] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('00:00');

/*
!___________________________________________Start hospitals______________________________________________________
*/
  const [allHospitals , setAllHospitals] = useState();
  const [hospitals, setHospitals] =  useState();

  useEffect(() => {
    getHospital_();
  }, [])
  const getHospital_ = () => {
    HospitalsAPI.getHospital().then(res => {
      console.log(res.data.data);
      setAllHospitals(res.data.data);

      const options = res.data.data.map(Hospital=>({
        value: Hospital.id,
        label: Hospital?. attributes?.Name
      }));
      setHospitals(options)
  
    })
  }

  console.log(hospitals)

/*
!______________________________________________End hospitals___________________________________________________
*/

/*
!______________________________________________Start Doctor___________________________________________________
*/


const [doctorFilteredByTYPE_OF_SPEC, setDoctorFilteredByTYPE_OF_SPEC] =  useState();

  useEffect(() => {
    getDoctorFilteredByTYPE_OF_SPEC_();
  }, [specializations])
  const getDoctorFilteredByTYPE_OF_SPEC_ = () => {
    DoctorsAPI.getDoctorFilteredByTYPE_OF_SPEC(specializations).then(res => {
      console.log(specializations);
      console.log(res.data.data);
      setAllHospitals(res.data.data);

      const options = res.data.data.map(doctor=>({
        value: doctor.id,
        label: doctor?.attributes?.Name
      }));
      setDoctorFilteredByTYPE_OF_SPEC(options)
  
    })
  }
  console.log(specializations)
  console.log(doctorFilteredByTYPE_OF_SPEC)
  console.log(specializations)

/*
!______________________________________________End Doctor___________________________________________________
*/
/*
!______________________________________________Start Receptionist_______________________________________________
*/
const [ReceptionistFilteredByRegistrationNumber , setReceptionistFilteredByRegistrationNumber] = useState();
useEffect(() => {
  getReceptionistByRegistrationNumber_();
}, [receptionistRegNum])
console.log(receptionistRegNum)
const getReceptionistByRegistrationNumber_ = () => {
  ReceptionAPI.getReceptionistByRegistrationNumber(receptionistRegNum).then(res => {
    console.log(res.data.data[0].id);
    setReceptionistFilteredByRegistrationNumber(res.data.data[0].id);

  })
}

/*
!______________________________________________End Receptionist__________________________________________________
*/
 

/*
!______________________________________________Start ConvertTimeFormat func__________________________________________________
*/
function convertTimeFormat(time) {
    const [hours, minutes] = time.split(':');
    const paddedHours = hours.padStart(2, '0');
    const paddedMinutes = minutes.padStart(2, '0');
  return `${paddedHours}:${paddedMinutes}:00`;
}
/*
!______________________________________________End ConvertTimeFormat func___________________________________________________
*/



  const options = [
    { value: 'general specialty', label: 'general specialty' },
    { value: 'Anatomical Pathology', label: 'Anatomical Pathology' },
    { value: 'Anesthesiology', label: 'Anesthesiology' },
    { value: 'Cardiology', label: 'Cardiology' },
    { value: 'Cardiovascular/Thoracic Surgery', label: 'Cardiovascular/Thoracic Surgery' },
    { value: 'Clinical Immunology/Allergy', label: 'Clinical Immunology/Allergy' },
    { value: 'Critical Care Medicine', label: 'Critical Care Medicine' },
    { value: 'Dermatology', label: 'Dermatology' },
  ];

/*
!______________________________________________Start Patient_______________________________________________
*/
const [patientsIdFiltersByRegNum , setPatientsIdFiltersByRegNum] = useState();
useEffect(() => {
  getPatientByRegistrationNumber_();
}, [])
// console.log(PatientRegNum)
const getPatientByRegistrationNumber_ = () => {
   
  let regNum = PatientRegNum.replace('P', '');
  PatientAPI.getPatientByRegistrationNumber(`P${regNum}`).then(res => {
    console.log(res.data.data[0].id);
    setPatientsIdFiltersByRegNum(res.data.data[0].id);

  })
}
/*
!______________________________________________End Patient_______________________________________________
*/

/*
!______________________________________________Start AppointmentID_______________________________________________
*/

const [allAppointments , setAllAppointments] = useState();
useEffect(() => {
  getAppointments_();
}, [])

const getAppointments_ = () => {
  AppointmentsAPI.getAppointments()
    .then(res => {
      console.log(res.data.data);
      setAllAppointments(res.data.data);
    })
    .catch(err => {
      console.error(err);
      
    });
}
const generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 900000 + 100000);
  return randomNumber;
}

let valid_Patient_Reg_num = 0;
let reg;

while (!valid_Patient_Reg_num) {
  reg = generateRandomNumber();

  const user = (allAppointments|| []).find(
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
/*
!______________________________________________End AppointmentID ________________________________________________
*/
console.log(ReceptionistFilteredByRegistrationNumber)

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      data:{
        specializations: specializations,
        date: date,
        time: convertTimeFormat(time),
        AppointmentID: `A${valid_Patient_Reg_num}`,
        hospital: hospital ,
        patient:patientsIdFiltersByRegNum,
        receptionists:ReceptionistFilteredByRegistrationNumber ,
        doctor:doctor
      }
    }
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
    PostApp.addApp(data).then((res) => {
      console.log(res);
      Swal.close();
      Swal.fire({
        title: "Congratulations",
        text: "Your account has been registered successfully",
        icon: "success"
      });
    }).catch((error) => {
      console.log(error);
      Swal.close(); 
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was an error recording, try again"
      });
    });

  };
    return(
      <div className="max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6">
      <div className="text-center mb-16">
        <a href="javascript:void(0)">
          <Image
        width={50} height={50}
          src={logo} alt="logo" className='inline-block' />
        </a>
        <h4 className="text-3xl font-bold mb-3 text-blue-600 mt-1">
          Make New Appointment
        </h4>
      </div>
      <form >
        <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12">
          <div>
            <label className="text-sm mb-2 block">Registration number</label>
            
            <input
             required
             name="name"
             type="text"
             className="border-2 border-gray-300 bg-[#fff]-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
             disabled
             value={PatientRegNum.includes('P') ? PatientRegNum : `P${PatientRegNum}`}
             />
          </div>
          <div>
            <label className="text-sm mb-2 block">Patient Name</label>
            <input
             required
             name="email"
             type="email" 
             className="border-2 border-gray-300 bg-[#fff]-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" 
             disabled
             value={PatientName}
            
             />
          </div>

          <div>
            <label className="text-sm mb-2 block">specializations</label>
          <Select
           options={options}
            onChange={(selectedOption) => setSpecializations(selectedOption.value)}
           />
           </div>
           <div>
            <label className="text-sm mb-2 block">Doctor</label>
          <Select
          //  key={doctorFilteredByTYPE_OF_SPEC.length} 
           options={doctorFilteredByTYPE_OF_SPEC}
           onChange={(selectedOption) => setDoctor(selectedOption.value)}
           />
           </div>
           <div>
            <label className="text-sm mb-2 block">Hospitals</label>
          <Select
           options={hospitals}
            
            onChange={(selectedOption) => setHospital(selectedOption.value)}
           />
           </div>
           <div>
            <label className="text-sm mb-2 block">Date</label>
            <input
             required
             name="Date" 
             type="date" 
             className="border-2 border-gray-300 bg-[#fff]-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
             value={date}
             onChange={(e) => setdate(e.target.value)} 
             />
          </div>
          <div>
            <label className="text-sm mb-2 block">Time</label>
            <input
             required
             name="time" 
             type="time" 
             className="border-2 border-gray-300 bg-[#fff]-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" 
             placeholder="time" 
             value={time}
             onChange={(e) => settime(e.target.value)} 
             />
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-10">
    <button 
    type="button" 
    className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
    onClick={(e)=> handleSubmit(e)}
    >
      Book Appointment
    </button>
  </div>
      </form>
    </div>
    )
} 
export default Make_app; 



// // Inside your component
// const [options, setOptions] = useState([]);

// useEffect(() => {
//   axios.get('your-api-url-here')
//     .then(response => {
//       // assuming the API returns an array of options
//       const fetchedOptions = response.data.map(item => ({
//         value: item.value, // replace 'value' and 'label' with the actual property names returned by your API
//         label: item.label
//       }));
//       setOptions(fetchedOptions);
//     })
//     .catch(error => {
//       console.error('There was an error!', error);
//     });
// }, []);

// return (
//   <div>
//     <label className="text-sm mb-2 block">specializations</label>
//     <Select
//       options={options}
//       onChange={(selectedOption) => setSpecializations(selectedOption.value)}
//     />
//   </div>
// );