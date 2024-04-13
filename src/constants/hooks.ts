import { useEffect, useState } from "react";

import { BioData } from "@/constants/prompts";

export function useBiodata() {
  const [biodata, setBiodata] = useState<BioData | undefined>()

  useEffect(()=>{
    setBiodata(JSON.parse(localStorage.getItem('bioData') as string) as BioData);
  }, [])

  return {biodata}
}