'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Home = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      try { router.replace('/auth') } catch (e) { null }
    }, 1000)
  }, [router])


  return (
    <main className="flex justify-center items-center px-4 py-8 h-screen">
      <div className="flex flex-col p-20 rounded-full gap-8 max-w-xs bg-secondary items-center justify-center">
        <div className="flex flex-col gap-2 items-center animate-bounce">
          <Image
            src="/svg/logo-main.svg"
            priority
            alt="Logo"
            width={400}
            height={400}
            className="w-16 h-16" />
          <h4 className="font-normal">Phina Green</h4>
        </div>
      </div>
    </main>
  );
};

export default Home;
