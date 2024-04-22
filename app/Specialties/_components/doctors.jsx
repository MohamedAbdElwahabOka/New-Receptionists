import React from 'react';
import Character1 from '/public/Character1.png'; // Replace with your image paths
import Character2 from '/public/Character2.png';
import Character4 from '/public/Character4.png';
import DoctorCard from './DoctorCard';

const Cardiology = () => {
  return (
    <div className="flex flex-col items-center space-y-4  p-4">
      <h2 className="text-2xl">Cardiology</h2>
      <div className="grid grid-cols-3 gap-11">
        <DoctorCard doctorName="Dr. Maged Raoof" doctorImage={Character1} imageWidth={137} imageHeight={137}/>
        <DoctorCard doctorName="Dr. Jana Farouk" doctorImage={Character2} imageWidth={91} imageHeight={91}/>
        <DoctorCard doctorName="Dr. Ahmed Mahmoud" doctorImage={Character4} imageWidth={100} imageHeight={100} />
      </div>
    </div>
  );
};

export default Cardiology;