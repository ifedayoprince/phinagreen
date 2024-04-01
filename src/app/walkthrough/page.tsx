import { InputField } from '@/components/InputField';
import { GoogleIcon } from '@/components/icons/google'
import Image from "next/image";
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { ArrowRight2 } from 'iconsax-react'

const Home = async () => {
  return (
    <main className="px-4 py-8 gap-5 flex justify-center">
      <div className="flex flex-col gap-8 max-w-lg">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="/svg/logo.svg"
            alt="Logo"
            width={400}
            height={400}
            className="w-10 h-10" />
          <h5 className="font-normal">Phina Green</h5>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h1>Hello there David!!</h1>
          <p className="text-subtext">Input your details to help us give you the best advice</p>
        </div>

        <div>
          <form className="mx-auto flex w-full flex-col">
            <div className="form-group">
              <div className="flex gap-2">
                <InputField title="Age" placeholder='24' type="text" />
                <InputField title="Height" placeholder='150cm' type="text" />
              </div>
              <InputField title="Weight" placeholder='80kg' type="text" />
              <InputField title="Allergies" placeholder='Signify if any' type="text" />
              <InputField title="Exercise Type" placeholder='Signify if any' type="text" />
              <InputField title="Food Preferences" placeholder='Signify if any' type="text" />
              <button className='btn btn-primary uppercase gap-3' type='submit'>
                Continue
                <ArrowRight2 />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;

