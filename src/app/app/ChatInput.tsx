/* eslint-disable @typescript-eslint/no-explicit-any */
import { Send2 } from 'iconsax-react';
import Image from 'next/image';
import { ChangeEvent } from 'react';


export function ChatInput({ disabled, input, handleSubmit, handleInputChange, avatar }: {
  input: string,
  avatar: string,
  handleSubmit: any,
  handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void,
  disabled?: boolean
}) {
  
  return <div className="flex gap-2 w-full items-center">
    <div className="avatar avatar-sm avatar-squared">
      <Image
        src={avatar}
        alt='avatar'
        width={300}
        height={300} /></div>
    <form onSubmit={handleSubmit} className='w-full form-control relative'>
      {/* <span className={`textarea textarea-block max-h-[6rem] overflow-y-scroll no-scrollbar min-w-full empty:before:content-["Chat"] empty:before:text-subtext rounded-md pr-10 ${disabled && "bg-gray-200 cursor-not-allowed"}`} role="textbox" contentEditable={!disabled} onChange={handleInputChange}>{input}</span> */}
      <input className={`textarea textarea-block max-h-[6rem] overflow-y-scroll no-scrollbar min-w-full rounded-md pr-10 ${disabled && "bg-gray-200 cursor-not-allowed"}`} placeholder='Chat' role="textbox" disabled={disabled} onChange={handleInputChange} value={input}></input>
      <span className="absolute inset-y-0 right-4 inline-flex items-center">
        {disabled
          ? <svg className="spinner-ring p-2" viewBox="25 25 50 50" strokeWidth="6">
            <circle cx="50" cy="50" r="20" />
          </svg>
          : <button type='submit'><Send2 variant='Bold' className=' text-primary w-5 h-5' /></button>
        }
      </span>
    </form>
  </div>;
}

