import React from 'react'
import { Input } from '../components/Input'
import Button from '../components/Button';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';


export const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;

      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password,
      });
      const jwt = response.data.token;
      localStorage.setItem("token",jwt);
      navigate("/dashboard");
      
    }
  return (
    <div className="h-screen w-screen bg-slate-200 flex justify-center items-center flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl font-semibold">Welcome To Second-Brain</h1>
        <h1 className="border-b-2 border-purple-900"></h1>
      </div>
      <div className="bg-white rounded-xl border min-w-48 flex flex-col gap-y-4 p-8">
        <Input ref={usernameRef} placeholder="Enter Your Username..." />
        <Input ref={passwordRef} placeholder="Enter Your Password..." />
        <div className="flex justify-center">
          <Button
            onClick={signin}
            loading={false}
            variant="primary"
            text="SignIn"
            fullWidth={true}
          />
        </div>
        <h1 className='text-[14px]'>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer text-purple-700"
          >
            signup
          </span>
        </h1>
      </div>
    </div>
  );
}


