import { ReactNode } from "react";

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <main className="w-full h-full flex justify-center">
      <div className="container xl:px-20 xl:py-5">{children}</div>
    </main>
  )
}