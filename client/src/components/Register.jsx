import React, { useState } from "react";
import { useDispatch } from "react-redux";


import { register } from "../actions/auth"; 

import { Navigate } from "react-router-dom";

import {ReactComponent as UserIcon} from "../assets/logos/UserLogo.svg"


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  const roles = ["user"];

  // const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (password !== confirmpassword) {
  //     setPasswordError("Passwords do not match");
  //   } else {
  //     // Password and confirm password match, do something
  //     setPasswordError("");
  //   }
  // }, [password, confirmpassword]);

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    dispatch(register(username, email, password, roles))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  if(successful) {
    return <Navigate to="/" />;
  }

  return (
    <>
    <div className="w-full max-w-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">        
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleRegister}>
          <div className="flex flex-col text-center items-center">
            <div>
              <label className="text-[24px] font-semibold">REGISTER</label>
            </div>            
            <div>
              <UserIcon className="w-28" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={e=>{setUsername(e.target.value)}} required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" onChange={e=>{setEmail(e.target.value)}} required/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"  onChange={e=>{setPassword(e.target.value)}} required/>
            {password === "" && (
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
            )}
            
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Confirm Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"  onChange={e=>{setConfirmpassword(e.target.value)}} required/>
            {password !== confirmpassword && (
                <p className="text-red-500 text-xs italic">Invalid confirm password.</p>
            )}
            
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Register
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
              Login now?
            </a>
          </div>
        </form>
        
      </div>
      </>
 
  );
};

export default Register;
