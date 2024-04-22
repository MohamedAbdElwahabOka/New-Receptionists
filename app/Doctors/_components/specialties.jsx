import img2 from '/public/img2.png'
import img4 from '/public/img4.png'
import img1 from '/public/img1.png'
import img3 from '/public/img3.png'
import img5 from '/public/img5.png'
import img6 from '/public/img6.png'
import img8 from '/public/img8.png'
import img11 from '/public/img11.png'


import React from 'react';
import DoctorSpecialty from './DoctorSpecialty';
import Link from 'next/link'

const doctorData = [
  { doctorImg: img2, doctorSpecialty: 'Cardiology'},
  { doctorImg: img4, doctorSpecialty: 'Dermatologist' },
  { doctorImg: img3, doctorSpecialty: 'Gastroenterology' },
  { doctorImg: img5, doctorSpecialty: 'Obstetrics' },
  { doctorImg: img6, doctorSpecialty: 'Psychiatry' },
  { doctorImg: img8, doctorSpecialty: 'Ophthalmology' },
  { doctorImg: img11, doctorSpecialty: 'Otolaryngology' },
  { doctorImg: img1, doctorSpecialty: 'Orthopedics' },
];

const DoctorsSpecialties = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl">Doctors Specialties</h2>
      <div>
      <Link href='Specialties' className="grid grid-cols-4 gap-14">
        {doctorData.map((doctor) => (
          <DoctorSpecialty key={doctor.doctorSpecialty} {...doctor} />
        ))}
        </Link>
      </div>
    </div>
  );
};

export default DoctorsSpecialties;

