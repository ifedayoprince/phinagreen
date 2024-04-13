'use client'

import { Logout,Menu, Person } from "@mui/icons-material";
import { Drawer, SwipeableDrawer } from "@mui/material";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from "react";

import { BMIInfoDisplay } from "@/app/app/BMIInfoDisplay";
import logout from '@/firebase/auth/logout';


export const PGAppNav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter()


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (<>
    <div className='flex justify-between w-full'>
      <div className="flex gap-2 items-center">
        <Image
          src="/svg/logo.svg"
          priority
          alt="Logo"
          width={400}
          height={400}
          className="w-8 h-8" />
        <h6 className="font-normal">Phina Green</h6>
      </div>
      <div className='bg-secondary gap-4 text-primary rounded-full p-2 grid grid-cols-2'>
        <Person className='text-h5 !hidden md:!block cursor-pointer hover:text-primary/95' onClick={()=> {router.push('/app/info')}} />
        <Logout className='text-h5 text-red-500 cursor-pointer hover:text-red-500/95' onClick={logout} />
        <Menu onClick={showDrawer} className='text-h5 md:!hidden cursor-pointer hover:text-primary/95'/>
      </div>
    </div>
    <SwipeableDrawer onClose={onClose} anchor='right' open={open} onOpen={()=>{0}} >
      <BMIInfoDisplay className="xl:w-[23rem] w-[20rem]" />
    </SwipeableDrawer>
    </>)
}