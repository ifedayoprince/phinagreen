import { InputField } from '@/components/InputField';
import { GoogleIcon } from '@/components/icons/google'
import Image from "next/image";
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { ArrowRight2 } from 'iconsax-react'

const Home = async () => {
  return (
    <main className="grid grid-cols-2 px-4 py-8 gap-5">
      <div className="flex flex-col gap-8 max-w-xs">
        <div className="flex gap-2 items-center">
          <Image
            src="/svg/logo.svg"
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

        <button className="btn secondary gap-2">
          <GoogleIcon />
          Log In with Google
        </button>
        <div className="divider">OR USE EMAIL</div>

        <div>
          <form className="mx-auto flex w-full flex-col">
            <div className="form-group">
              <InputField title="EMAIL" placeholder='john@example.com' type="email" />
              <InputField title="PASSWORD" placeholder='•••••••••••' type="password" />
              <button className='btn btn-primary uppercase gap-3' type='submit'>
                Continue
                <ArrowRight2 />
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
      <div className="">
        <Image
          src="/svg/illustration.svg"
          alt="bitmoji of a man pointing down to phinagreen's logo"
          width={500}
          height={500}
          className="h-4/6" />
      </div>
    </main>
  );
};

export default Home;
