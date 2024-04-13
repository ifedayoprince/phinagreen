import Image from "next/image";
import { redirect } from "next/navigation";


const Home = async () => {
  setTimeout(()=>{
    redirect('/auth')
  }, 1000)
  
  return (
    <main className="flex justify-center items-center px-4 py-8 h-screen">
      <div className="flex flex-col p-20 rounded-full gap-8 max-w-xs bg-secondary items-center justify-center">
        <div className="flex flex-col gap-2 items-center animate-bounce">
          <Image
            src="/svg/logo.svg"
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
