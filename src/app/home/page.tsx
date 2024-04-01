import { InputField } from '@/components/InputField';
import { GoogleIcon } from '@/components/icons/google'
import Image from "next/image";
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { ArrowRight2, Profile } from 'iconsax-react'
import { Logout, Person } from '@mui/icons-material';

const Home = async () => {
  const QuickActions = ["Generate BMI", "Suggest exercise", "Suggest diet plan", "Continental recipes", "Nutrition counselling", "Meal costing"]
  return (
    <main className="px-4 py-8 gap-5 flex justify-center w-full">
      <div className='w-full flex flex-col gap-5'>
        <div className='flex justify-between w-full'>
          <div className="flex gap-2 items-center">
            <Image
              src="/svg/logo.svg"
              alt="Logo"
              width={400}
              height={400}
              className="w-8 h-8" />
            <h6 className="font-normal">Phina Green</h6>
          </div>
          <div className='bg-secondary gap-4 text-primary rounded-full p-2 grid grid-cols-2'>
            <Person className="text-h5" />
            <Logout className='text-h5' />
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-lg">
          <h1>Hello there David!!</h1>
          <p className="text-subtext">Select quick actions to help me give you the best tip, all tips generated are tailored to your requirements from your details provided.</p>
        </div>
        <div className='flex flex-wrap gap-3'>{
          QuickActions.map((action, i) => <p key={i} className='px-4 py-3 border border-primary rounded-full'>{action}</p>)
        }</div>
        <div className='bg-[#F5F5F5] w-full rounded-lg min-h-[26rem]'>

        </div>
      </div>

      <div></div>
    </main>
  );
};

export default Home;

