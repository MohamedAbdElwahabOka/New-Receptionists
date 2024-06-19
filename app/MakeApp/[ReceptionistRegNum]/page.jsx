"use client"
import Make_app from '../_components/Make_app';
import Sidebar from '../../_components/Sidebar'
import withAuth from '../../_Utils/withAuth';
function page({params}){
    // console.log(params.RRegNum)
    return(
        <div>
        <div className="flex h-screen">  
          <Sidebar 
          reg={params.ReceptionistRegNum}
          className="w-64 bg-gray-800 text-white px-4 py-8" />
          <div className="flex-grow bg-gray-100 p-8">
          <Make_app receptionistRegNum={params.ReceptionistRegNum}/>
          </div>
        </div>
        </div>
    )
}

export default withAuth(page)