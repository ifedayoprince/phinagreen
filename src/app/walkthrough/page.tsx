/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { ArrowRight2 } from 'iconsax-react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { InputField } from '@/components/InputField';

import { ProgressBar } from '@/app/walkthrough/ProgressBar';
import { BioData } from '@/constants/prompts';
import { useAuthContext } from '@/context/AuthContext';
import addData from '@/firebase/firestore/addData';

const Home = () => {
  const { user } = useAuthContext()
  const router = useRouter()
  const { handleSubmit, register } = useForm({ mode: 'onChange' })
  const [isLoading, setIsLoading] = useState(false);
  const [nextSlide, setNextSlide] = useState(false);
  const [loadingBMI, setLoadingBMI] = useState<any>(true);
  const [bmi, setBMI] = useState<any>(null);

  useEffect(() => {
    try { if (user == null) { router.push("/auth"); return; } } catch (e) { null }
  }, [router, user])


  const handleBiodataUpdate = (data: any) => {
    setIsLoading(true);
    
    const bmi = parseFloat(data.weight) / Math.pow(parseFloat(data.height), 2);
    let bmiSummary = "N/A"

    if (bmi < 18.5) bmiSummary = "Underweight"
    else if (bmi > 18.5 && bmi < 25) bmiSummary = "Normal"
    else if (bmi > 25 && bmi < 30) bmiSummary = "Overweight"
    else if (bmi > 30) bmiSummary = "Obesity"

    setBMI({
      bmi, bmiSummary
    })

    addData('biodata', user.uid, data as BioData).then(() => setNextSlide(true))
  }

  useEffect(()=>{
    if(!nextSlide) return;

    setTimeout(()=>{
      setLoadingBMI(false);
    },2000)
  }, [nextSlide])

  return (
    <main className="px-4 py-8 gap-5 flex justify-center">
      <div className="flex flex-col gap-8 max-w-lg">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="/svg/logo.svg"
            priority
            alt="Logo"
            width={400}
            height={400}
            className="w-10 h-10" />
          <h5 className="font-normal">Phina Green</h5>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h1>Hello there {user ? user.displayName?.split(" ")[0] : "N/A"}!!</h1>
          <p className="text-subtext">Input your details to help us give you the best advice</p>
        </div>

        <div>
          <ProgressBar step={nextSlide ? 3 : 2} />
          {!nextSlide
            ? <form className="mx-auto flex w-full flex-col" onSubmit={handleSubmit(handleBiodataUpdate)}>
              <div className="form-group">
                <div className="w-full grid grid-cols-2 gap-3">
                  <InputField {...register('age')} title="Age" placeholder='24' min={0} type="number" />
                  <InputField {...register('height')} title="Height" placeholder='1.5m' min={0} step={0.1} type="number" />
                </div>
                <InputField {...register('weight')} title="Weight" placeholder='60kg' min={0} type="number" />
                <InputField {...register('allergies')} title="Allergies" placeholder='Signify if any' type="text" />
                <InputField {...register('exercise')} title="Exercise Type" placeholder='Signify if any' type="text" />
                <InputField {...register('food')} title="Food Preferences" placeholder='Signify if any' type="text" />
                <button className={`btn btn-primary uppercase gap-3 ${isLoading && 'animate-pulse'}`} type='submit' disabled={isLoading}>
                  {isLoading
                    ? "Loading..."
                    : <>Continue
                      <ArrowRight2 /></>
                  }
                </button>
              </div>
            </form>
            : <div className='w-full'>

              {loadingBMI
                ? <div className="bg-secondary flex gap-4 items-center justify-center rounded-full px-8 py-12 w-full">
                  <div className="spinner-circle"></div>
                  Please wait, Phina Green is generating your BMI
                </div>
                : <div className="flex gap-4 items-center justify-center w-full">
                  <div className="flex flex-col gap-1 bg-secondary px-12 py-12 rounded-full items-center text-primary">
                    <h1>{bmi.bmi.toFixed(1)}</h1>
                    <h5>{bmi.bmiSummary}</h5>
                  </div>
                </div>
              }
              <button className="btn btn-primary uppercase gap-3 w-full mt-6" onClick={() => router.push('/app')} disabled={loadingBMI}>
                Continue to Chat
                <ArrowRight2 />
              </button>
            </div>
          }
        </div>
      </div>
    </main>
  );
};

export default Home;

