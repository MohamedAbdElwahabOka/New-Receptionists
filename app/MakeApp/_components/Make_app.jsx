import Link from "next/link"
export default function Make_app(){
    return(
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Make new appointment</h2>
        <form>
          <div className="flex items-center">
             <h3 htmlFor="name" className="mr-2">Patient ID: R1234</h3>
            </div>

            <div className="flex items-center">
            <label htmlFor="gender" >Specializations :</label>
            <select className="border rounded-md p-2 m-2" required>
                <option >Cardiology</option>
                <option >Dermatologist</option>
                <option >Gastroenterology</option>
                <option >Obstetrics</option>
                <option >Psychiatry</option>
                <option >Ophthalmology</option>
                <option >Otolaryngology</option>
                <option >Orthopedics</option>
              </select>
                </div>

            <div className="flex items-center">
            <label htmlFor="dob" className="mr-2">Date:</label>
              <input type="date" id="dob" placeholder="10-1-2024" className="border rounded-md p-2 m-2" required />
            </div>
            
            <div className="flex items-center">
             <label htmlFor="time" className="mr-2">Time :</label>
             <input id="date" placeholder="time" type="time" className="border rounded-md p-2 m-2" required />
            </div>


            <div className="flex items-center p-2 m-2">
            <label htmlFor="hospital">Hospital:</label>
              <select id="address-governorate" placeholder="Governorate" className="w-30 border rounded-md p-2 m-2" required>
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Qalyubia">Qalyubia</option>
              <option value="Sharqia">Sharqia</option>
              <option value="Dakahlia">Dakahlia</option>
              <option value ="Gharbia">Gharbia</option>
              <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
              <option value="Monufia">Monufia</option>
              <option value="Red Sea">Red Sea</option>
              <option value="New Valley">New Valley</option>
              <option value="Sohag">Sohag</option>
              <option value="Qena">Qena</option>
              <option value="Luxor">Luxor</option>
              <option value="Aswan">Aswan</option>
              <option value="Beni Suef">Beni Suef</option>
              <option value="Faiyum">Faiyum</option>
              <option value="Minya">Minya</option>
              <option value="Asyut">Asyut</option>
              <option value="Wadi">Wadi</option>
              <option value="South Sinai">South Sinai</option>
              <option value="North Sinai">North Sinai</option>
              <option value="Damietta">Damietta</option>
              <option value="Port Said">Port Said</option>
              <option value="Ismailia">Ismailia</option>
              <option value="Suez">Suez</option>
              <option value="Matruh">Matruh</option>
              <option value="New Alexandria">New Alexandria</option>
              <option value="New Capital">New Capital</option>
              </select>
            </div>

           
            <div className="col-span-2 flex flex-col justify-center items-center ">
    <div className="flex justify-center w-full">
    <button className="w-20 h-10 m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-1 border-b-4 border-blue-700 hover:border-blue-500 rounded ">Save</button>
  </div>
              </div>
              </form>
          </div>
    )
}