import Image from 'next/image';

const DoctorCard = ({ doctorName, doctorImage,imageWidth,imageHeight}) => {
 
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
      <Image
        src={doctorImage}
        width={imageWidth}
        height={imageHeight}
        alt={`Picture of ${doctorName}`}
      />
      <p className="text-lg font-semibold mt-2">{doctorName}</p>
      <hr className="w-1/2 mr-4 mt-2 border-gray-400" style={{ alignSelf: 'flex-start' }} />
    </div>
  );
};

export default DoctorCard;

