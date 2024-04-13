/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Message } from 'ai';
import { useChat } from 'ai/react';
import { User } from 'firebase/auth';
import { useEffect, useRef } from 'react';

import useBiodata from '@/store/useBiodata';
import useCustomAction from '@/store/useCustomAction';

import { ChatInput } from "@/app/app/ChatInput"
import { ChatMessage } from "@/app/app/ChatMessage"


export const ChatBox = ({ user }: { user: User }) => {
  const { data: biodata, update } = useBiodata();
  const chatBody = useRef(null);

  const customActionMessage = useCustomAction(state => state.message);
  const { messages, input, handleInputChange, handleSubmit, error, isLoading, append, stop } = useChat(user && {
    body: {
      biodata
    }
  });

  useEffect(() => {
    if (!user) return;
    update(user.uid);
  }, [update, user])

  useEffect(()=>{
    if (!customActionMessage) return;

    const msg: Message = {
      content: customActionMessage,
      role: 'user',
      id: ''
    }

    stop()
    append(msg);
  }, [customActionMessage]);

  
  useEffect(() => {
    if (!chatBody.current) return;

    const el = chatBody.current as unknown as HTMLDivElement;
    el.scrollTo(0, el.scrollHeight)
  }, [messages])

  return (<div className='bg-[#F5F5F5] w-full rounded-lg grid grid-rows-[auto_min-content] gap-3 p-5 min-h-[26rem]'>
    <div className='h-full w-full max-h-[26rem] overflow-y-auto no-scrollbar'>
      <div ref={chatBody} className="w-full flex flex-col items-end gap-2">
        {messages.map((chat, i) => <ChatMessage key={i} avatar={user?.photoURL ? user.photoURL as string : '/avatar.jpg'} bot={chat.role !== 'user'} message={chat.content} />)}
        {isLoading && <ChatMessage bot loading message="" />}
        {error && <div className="divider w-full text-red-500">An error occured</div>}
      </div>
    </div>
    <ChatInput disabled={isLoading} input={input} avatar={user?.photoURL ? user.photoURL as string : '/avatar.jpg'} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
  </div>)
}