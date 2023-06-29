import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import {ReactComponent as UserIcon} from "../assets/logos/UserLogo.svg"

import { login } from "../actions/auth";


const Login = (props) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);


  const dispatch = useDispatch();


  const handleLogin = (e) => {

    e.preventDefault();

    setLoading(true);
    dispatch(login(email, password))
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch(() => {
        if (message) {
          alert(message);
        }
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="w-full max-w-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">        
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
          <div className="flex flex-col text-center items-center">
            <div>
              <label className="text-[24px] font-semibold">LOGIN</label>
            </div>            
            <div>
              <UserIcon className="w-28" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" onChange={e=>{setEmail(e.target.value)}} required/>
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
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={loading}>
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/register">
              Create an account.
            </a>
          </div>
        </form>
        
      </div>
    </>
   
  );
};

export default Login;
