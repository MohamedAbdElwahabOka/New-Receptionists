"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'
import Cookies from 'js-cookie';


const Login = ({data}) => {


  const [registrationNumber, setRegistrationNumber] = useState('');
  const [Password, setPassword] = useState('');
  const router = useRouter();


  const handleLogin = (e) => {

    e.preventDefault();
    const user = data.find(
      (item) =>
        item.attributes.reg_Num == registrationNumber &&
        item.attributes.Password == Password
    );
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid registration number or password.",
      });
    } else {
      Cookies.set(`user_${user?.attributes?.reg_Num}`, JSON.stringify(user));
      router.push(`/FrontPage/${user?.attributes?.reg_Num}`);
      Swal.fire(`Hello ${user?.attributes?.Name}!`, `Welcome to Telegy Care!`, `success`);
    }
  };





  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="bg-white h-screen flex justify-center items-center border border-gray-300">
      <div className="flex-1 max-w-lg w-full mx-auto">
        <form method="post" onSubmit={(e) => handleLogin(e)} className="space-y-6">
          <div className="flex items-center justify-center">
            <Image src="/logo.svg" alt="Logo" width={150} height={75} />
          </div>
          <div className="text-center">
            <p className="text-xl font-medium text-gray-700 mt-4">
              Telegy Care
            </p>
          </div>
          <div>
            <label className="block text-xl font-medium text-gray-700">
              Registration Number
            </label>
            <div className="mt-1">
              <input
                id="registrationNumber"
                name="registrationNumber"
                required
                className="appearance-none block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-xl font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
              id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* <div className="text-red-500">{errorMessage}</div> */}

          <div>
            <button
              onClick={(e) => handleLogin(e)}
              type="submit"
              className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;