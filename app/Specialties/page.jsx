import Cardiology from './_components/doctors';
import Sidebar from '../_components/Sidebar'

export default function page(){
    return(
        <div>
    <div className="flex h-screen">  
      <Sidebar className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
        <Cardiology/>
      </div>
    </div>
    </div>
    )
}