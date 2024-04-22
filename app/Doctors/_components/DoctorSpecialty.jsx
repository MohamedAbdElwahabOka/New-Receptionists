import React from 'react';
import Image from 'next/image';

const DoctorCard = ({ doctorName, doctorImg, doctorSpecialty }) => {
  return (
    <div className="doctor-card bg-white rounded-md shadow-md p-4 flex flex-col items-center">
      {doctorImg && (
        <Image src={doctorImg} alt={`Doctor ${doctorName}`} className="w-32 h-32 rounded-full mb-2" />
      )}
      <h3>{doctorName}</h3>
      <p className="text-gray-600">{doctorSpecialty}</p>
    </div>
  );
};

export default DoctorCard;