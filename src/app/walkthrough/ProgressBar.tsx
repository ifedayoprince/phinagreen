export const ProgressBar = ({step}: {step: number}) => {
  const selected = 'bg-primary';

  // transform: rotate(90deg);
  // margin-left: -3rem;
  // margin-right: -3rem;
  // margin-top: 3rem;
  // max-width: 7rem;
  return (
    <div className="flex md:flex-col gap-2 mx-auto my-4 mb-8">
      <progress className="progress progress-flat-success h-1 rounded-none w-full -mx-12 mt-12 md:m-0 rotate-90 md:rotate-0 max-w-28 md:max-w-[unset]" value={(step/4)*100} max={100}></progress>
      <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-3">
        <div className="flex gap-1 items-center">
          <div className={`w-3 h-3 aspect-square rounded-full border-secondary border-[3px] ${step > 1 && selected}`}></div>
          <p className='text-xs'>Create an account</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className={`w-3 h-3 aspect-square rounded-full border-secondary border-[3px] ${step > 2 && selected}`}></div>
          <p className='text-xs'>Fill health form</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className={`w-3 h-3 aspect-square rounded-full border-secondary border-[3px] ${step > 3 && selected}`}></div>
          <p className='text-xs'>Generate BMI</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-3 h-3 aspect-square rounded-full border-secondary border-[3px] bg-orange-300"></div>
          <p className='text-xs'>Start to Chat</p>
        </div>
      </div>
    </div>
  )
}