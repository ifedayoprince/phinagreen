'use client'

import { ArrowBack } from "@mui/icons-material";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { InputField } from "@/components/InputField";

import { BioData } from "@/constants/prompts";
import { useAuthContext } from "@/context/AuthContext";
import addData from "@/firebase/firestore/addData";


const Home = () => {
  const { user } = useAuthContext()
  const router = useRouter()
  const { handleSubmit, register } = useForm({ mode: 'onChange' })
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      if (user == null) router.push("/auth")
  }, [router, user])

  const handleBiodataUpdate = (data: unknown) =>{
    setIsLoading(true);
    addData('biodata', user.uid, data as BioData).then(()=> setIsLoading(false))
  }


  return (
    <>
      <div className="flex gap-2 items-center my-2">
        <button className="bg-secondary text-primary flex items-center justify-center p-1 rounded-full" onClick={()=> router.back()}>
          <ArrowBack className="text-h6" />
        </button>
        <h6>User profile</h6>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col justify-start gap-2">
        <Image
          src={user?.photoURL ? (user.photoURL as string).replace('s96-c', 's500-c') : '/avatar.jpg'}
          alt='avatar'
          width={300}
          height={300}
          className="w-48 h-48 rounded-lg" />
          <h6>{user ? user.displayName : 'N/A'}</h6>
        </div>
        <form className="mx-auto max-w-md flex w-full flex-col" onSubmit={handleSubmit(handleBiodataUpdate)}>
            <div className="form-group">
              <div className="flex gap-2">
                <InputField {...register('age')} title="Age" placeholder='24' min={0} type="number" />
                <InputField {...register('height')} title="Height" placeholder='1.5m' min={0} step={0.1} type="number" />
              </div>
              <InputField {...register('weight')} title="Weight" placeholder='60kg' min={0} type="number" />
              <InputField {...register('allergies')} title="Allergies" placeholder='Add' type="text" />
              <InputField {...register('exercise')} title="Exercise Type" placeholder='Add' type="text" />
              <InputField {...register('food')} title="Food Preferences" placeholder='Add' type="text" />
              <button className={`btn btn-primary uppercase gap-3 ${isLoading && 'animate-pulse'}`} type='submit' disabled={isLoading}>
                {isLoading
                  ? "Loading..."
                  : "Save"
                }
              </button>
            </div>
          </form>
      </div>
    </>
  )
}

export default Home;