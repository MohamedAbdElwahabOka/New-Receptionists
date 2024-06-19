'use client'
import New_patient from '../_components/new_patient';
import Sidebar from '../../_components/Sidebar'
import withAuth from '../../_Utils/withAuth';

function page({params}){
  console.log(params.ReceptionistRegNum)
    return(
        <div>
        <div className="flex h-screen">  
          <Sidebar 
          reg={params.ReceptionistRegNum}
          className="w-64 bg-gray-800 text-white px-4 py-8" />
          <div className="flex-grow bg-gray-100 p-8">
            <New_patient ReceptionistsRegNum={params.ReceptionistRegNum}/>
          </div>
        </div>
          
        </div>
    )
}

export default withAuth(page)
