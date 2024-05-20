import New_patient from '../_components/new_patient';
import Sidebar from '../../_components/Sidebar'
export default function page({params}){
  console.log(params.recepRegNum)
    return(
        <div>
        <div className="flex h-screen">  
          <Sidebar 
          reg={params.recepRegNum}
          className="w-64 bg-gray-800 text-white px-4 py-8" />
          <div className="flex-grow bg-gray-100 p-8">
            <New_patient reg={params.recepRegNum}/>
          </div>
        </div>
          
        </div>
    )
}
