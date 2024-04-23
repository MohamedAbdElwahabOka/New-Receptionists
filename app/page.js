'use client'
import React, { useEffect, useState } from 'react'
import Login from "./_components/Login";
import ReceptionAPI from './_Utils/ReceptionAPI'
export default function Home() {

  const [Receptionists, setReceptionists] = useState([]);
  useEffect(() => {
    getReceptionists_();
  }, [])

  const getReceptionists_ = () => {
    ReceptionAPI.getReceptionists().then(res => {
      console.log(res.data.data);
      setReceptionists(res.data.data);
      // setLoading(true)

    })
  }


  return (
    <>
      <Login data={Receptionists}/>
    </>
  );
}
