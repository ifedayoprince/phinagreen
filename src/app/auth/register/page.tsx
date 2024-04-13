/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ArrowRight2 } from 'iconsax-react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { GoogleIcon } from '@/components/icons/google'
import { InputField } from '@/components/InputField';

import signUp, { signUpWithGoogle } from '@/firebase/auth/signup';
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);


const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleForm = async (event: any) => {
    event.preventDefault()

    const { result: _result, error } = await signUp(email, password);

    if (error) {
      toast.error('Email is already in use');
      return;
    }

    return;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      try { if (user != null) { router.push("/app"); return; } } catch (e) { null }
    })
  }, [router]);
  return (
    <main className="grid md:grid-cols-2 px-4 py-8 gap-5">
      <div className="flex flex-col gap-8 w-full md:max-w-xs">
        <div className="flex gap-2 items-center">
          <Image
            src="/svg/logo-main.svg"
            priority
            alt="Logo"
            width={400}
            height={400}
            className="w-10 h-10" />
          <h5 className="font-normal">Phina Green</h5>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Sign up now to get started with the app</h1>
          <p className="uppercase text-subtext">Welcome to your health AI</p>
        </div>

        <button className="btn secondary gap-2" onClick={signUpWithGoogle}>
          <GoogleIcon />
          Sign up with Google
        </button>
        <div className="divider">OR USE EMAIL</div>

        <div>
          <form className="mx-auto flex w-full flex-col" onSubmit={handleForm}>
            <div className="form-group">
              <InputField onChange={(e) => setEmail(e.target.value)} required title="EMAIL" placeholder='john@example.com' type="email" />
              <InputField onChange={(e) => setPassword(e.target.value)} required title="PASSWORD" placeholder='•••••••••••' type="password" />
              <button className='btn btn-primary uppercase gap-3' type='submit'>
                Continue to App
                <ArrowRight2 />
              </button>
              <p className="text-subtext text-xs">By signing up to Phina Green, means you agree to our Privacy Policy and Terms of Service</p>
            </div>
            <div className="form-group mt-6">
              <p className='text-center text-subtext'>Already a Member?&nbsp;
                <a className="link underline text-text font-semibold" href="/auth/">LOG IN</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/svg/illustration.svg"
          priority
          alt="bitmoji of a man pointing down to phinagreen's logo"
          width={500}
          height={500}
          className="h-4/6" />
      </div>
    </main>
  );
};

export default Home;
