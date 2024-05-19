import Make_app from '../_components/Make_app';
import Sidebar from '../../_components/Sidebar'
export default function page({params}){
    // console.log(params.RRegNum)
    return(
        <div>
        <div className="flex h-screen">  
          <Sidebar 
          reg={params.RRegNum}
          className="w-64 bg-gray-800 text-white px-4 py-8" />
          <div className="flex-grow bg-gray-100 p-8">
          <Make_app/>
          </div>
        </div>
        </div>
    )
}