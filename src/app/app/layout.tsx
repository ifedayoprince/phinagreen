import { ReactNode } from "react";

import { BMIInfoDisplay } from "@/app/app/BMIInfoDisplay";
import { PGAppNav } from "@/app/app/PGAppNav";


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-screen overflow-hidden no-scrollbar flex justify-center">
      <div className="container xl:px-20 xl:py-5 overflow-y-auto">
        <div className="px-4 py-8 gap-5 flex justify-center w-full">
          <div className='w-full flex flex-col gap-5'>
            <PGAppNav />
            {children}
          </div>
        </div>
      </div>

      <BMIInfoDisplay className="hidden md:block xl:w-[23rem] w-[20rem]" />
    </main>
  )
}