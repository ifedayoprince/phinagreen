'use client'

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ArrowRight2 } from 'iconsax-react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { GoogleIcon } from '@/components/icons/google'
import { InputField } from '@/components/InputField';

import signIn, { signInWithGoogle } from '@/firebase/auth/signin';
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleForm = async (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    const { result: _result, error } = await signIn(email, password);

    if (error) {
      toast.error('User does not exist, please check your credentials');
      setIsLoading(false)
      return;
    }

    return;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      try { if (user == null) { router.push("/app"); return; } } catch (e) { null }
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
          <p className="uppercase text-subtext">WELCOME BACK 👋🏻</p>
          <h1>Continue to your Account.</h1>
        </div>

        <button className="btn secondary gap-2" onClick={signInWithGoogle}>
          <GoogleIcon />
          Log In with Google
        </button>
        <div className="divider">OR USE EMAIL</div>

        <div>
          <form className="mx-auto flex w-full flex-col" onSubmit={handleForm}>
            <div className="form-group">
              <InputField onChange={(e) => setEmail(e.target.value)} required title="EMAIL" placeholder='john@example.com' type="email" />
              <InputField onChange={(e) => setPassword(e.target.value)} required title="PASSWORD" placeholder='•••••••••••' type="password" />
              <button className='btn btn-primary uppercase gap-3' type='submit' disabled={isLoading}>
                {isLoading
                  ? "Loading..."
                  : <>Continue
                    <ArrowRight2 /></>
                }
              </button>
            </div>
            <div className="form-group mt-6">
              <p className='text-center text-subtext'>New to the App?&nbsp;
                <a className="link underline text-text font-semibold" href="/auth/register">GET STARTED</a>
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
