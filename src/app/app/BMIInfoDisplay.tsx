'use client'

import Link from "next/link"
import { useEffect, useState } from "react";

import useBiodata from "@/store/useBiodata";

import { useAuthContext } from "@/context/AuthContext";

export interface BMIInfo {
  bmi: number,
  bmiSummary: string;
}
export const BMIInfoDisplay = ({className}: {className: string}) => {
  const {data: biodata, update} = useBiodata();
  const [bmiData, setBMIData] = useState<BMIInfo|null>(null);

  const { user } = useAuthContext()

  useEffect(()=>{
    if(!user) return;
    update(user.uid);
  }, [user])
  
  useEffect(()=>{
    const bmi = parseFloat(biodata.weight) / Math.pow(parseFloat(biodata.height), 2);
    let bmiSummary = "N/A"

    if (bmi < 18.5) bmiSummary = "Underweight"
    else if (bmi > 18.5 && bmi < 25) bmiSummary = "Normal"
    else if (bmi > 25 && bmi < 30) bmiSummary = "Overweight"
    else if (bmi > 30) bmiSummary = "Obesity"

    setBMIData({
      bmiSummary, bmi
    })
  }, [biodata])

  return (<div className={`bg-secondary no-scrollbar h-full py-14 ${className}`}>
    <div className="w-full flex flex-col gap-2 py-5 px-8 bg-primary text-white">
      <h3>BMI</h3>
      <h4> {bmiData ? bmiData.bmi.toFixed(1) : "N/A"}</h4>
      <h6>{bmiData ? bmiData.bmiSummary : "N/A"}</h6>
    </div>
    <div className="px-8 mt-6 flex flex-col gap-7">
      <p className="text-subtext small">Your BMI is generated based on the info you give to PhinaGreen such as: Weight, Height e.t.c</p>
      <Link className="text-primary small font-semibold" href="/app/info">Change info</Link>
      <div className="flex flex-col gap-1">
        <h6>BMI Scale</h6>
        <p className="small">Underweight: less than 18.5</p>
        <p className="small">Normal weight: 18.5 - 25</p>
        <p className="small">Overweight: 25 - 30</p>
        <p className="small">Obesity: greater than 30</p>
      </div>
    </div>
  </div>)
}