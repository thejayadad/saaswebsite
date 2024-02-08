'use client'
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoginWithGoogle from '@/components/Buttons/LoginWithGoogle';
import {FiArrowDown} from "react-icons/fi"
import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const HomePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  

  useEffect(() => {
    if (session) {
      toast.success('Successfully signed in!');
      router.replace('/dashboard');

    }
  }, [session, router]);


  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl'>Login</h1>
      <p className='pulse flex flex-col sm:text-3xl items-center'>
            To Your Dashboard
            <br />
            <FiArrowDown />
          </p>
      <LoginWithGoogle />
    </div>
  )
}

export default HomePage