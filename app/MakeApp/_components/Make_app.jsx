"use client"
import { useState } from 'react';
import Link from "next/link"
import Image from "next/image";
import logo from '/public/logo.svg'
import PostApp from '../../_Utils/AppointmentsAPI';
import { useSearchParams } from 'next/navigation';
import Select from 'react-select';
 const Make_app = ({params}) => {
  const searchParams = useSearchParams();

  const PatientRegNum = searchParams.get('PatientRegNum')
  const PatientName = searchParams.get('name')
  // console.log(PatientRegNum)
  // console.log(name)
  
  const [specializations, setSpecializations] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');
  // const [AppointmentID, setAppointmentID] = useState('');
  // const [receptionist, setreceptionist] = useState('');

  const options = [
    { value: 'general specialty', label: 'general specialty' },
    { value: 'Anatomical Pathology', label: 'Anatomical Pathology' },
    { value: 'Anesthesiology', label: 'Anesthesiology' },
    { value: 'Cardiology', label: 'Cardiology' },
    { value: 'Cardiovascular/Thoracic Surgery', label: 'Cardiovascular/Thoracic Surgery' },
    { value: 'Clinical Immunology/Allergy', label: 'Clinical Immunology/Allergy' },
    { value: 'Critical Care Medicine', label: 'Critical Care Medicine' },
    { value: 'Dermatology', label: 'Dermatology' },
    // Add more options as needed
  ];



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

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      data:{
        specializations: specializations,
        date: date,
        time: time,
        AppointmentID: "4567989",
        hospital: 14 ,
        patient:21,
        receptionist:17 ,
        doctor:17
      }
    }
    PostApp.addApp(data).then((res) => {
      console.log('done');
      console.log(res);
    }).catch((error) => {
      console.log(error);
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
             value={`P${PatientRegNum}`}
           
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
          <div>
            <label className="text-sm mb-2 block">specializations</label>
          <Select
           options={options}
            onChange={(selectedOption) => setSpecializations(selectedOption.value)}
           />
           </div>
           <div>
            <label className="text-sm mb-2 block">Hospitals</label>
          <Select
           options={options}
            onChange={(selectedOption) => setSpecializations(selectedOption.value)}
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