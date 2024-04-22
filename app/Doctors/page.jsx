import React from 'react'
import DoctorsSpecialties from './_components/specialties'
import Sidebar from '../_components/Sidebar'

function specialties() {
  return (
    <div>
    <div className="flex h-screen">  
      <Sidebar className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
        <DoctorsSpecialties/>
      </div>
    </div>
    </div>
  )
}

export default specialties

