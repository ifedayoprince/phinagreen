import Image from 'next/image';

export const ChatMessage = ({ message, bot, loading, avatar }: { message: string, bot?: boolean, loading?: boolean, avatar?: string }) => {
  return (
    <div className={`flex gap-3 w-full ${bot ? "justify-start" : "justify-end"}`}>
      {bot && <div className="avatar avatar-sm md:avatar-md avatar-squared p-1">
        <Image
          src='/svg/logo.svg'
          priority
          alt='logo'
          className='!object-contain'
          width={300}
          height={300} /></div>}

      {
        loading
          ? <div className="spinner-dot-pulse">
            <div className="spinner-pulse-dot"></div>
          </div>
          : <div className={`${bot ? "bg-secondary" : "bg-primary"} px-3 py-2 text-text rounded-xl max-w-[14rem] md:max-w-md`}><pre className='text-wrap [font-family:inherit]'>{message}</pre></div>
      }

      {!bot && <div className="avatar avatar-sm md:avatar-md rounded-lg">
        <Image
          src={avatar ? avatar : ''}
          alt='avatar'
          className='!rounded-lg'
          width={300}
          height={300} /></div>}
    </div>
  )
}