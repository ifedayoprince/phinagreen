/* eslint-disable @typescript-eslint/no-empty-function */
'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import useBiodata from '@/store/useBiodata';
import useCustomAction from '@/store/useCustomAction';

import { ChatBox } from '@/app/app/ChatBox';
import { useAuthContext } from '@/context/AuthContext';

const Home = () => {
  const { user } = useAuthContext()
  const router = useRouter()

  const { data: _biodata, update } = useBiodata();
  const sendCustomAction = useCustomAction(state => state.sendMessage);

  useEffect(() => {
    if (user == null) {router.push("/auth"); return;}

    update(user.uid);
  }, [router, update, user])

  const QuickActions: [string, () => void][] = [
    ["Generate BMI", () => { sendCustomAction("Generate my BMI with me. Let's think step by step")}],
    ["Suggest exercise", () => { sendCustomAction('Suggest exercises I could engage in') }],
    ["Suggest diet plan", () => { sendCustomAction('Suggest diet plans I could join in') }],
    ["Continental recipes", () => { sendCustomAction('Suggest continental dishes that would be good for me') }],
    ["Nutrition counselling", () => { sendCustomAction('Give me some nutritional counsel') }],
    ["Meal costing", () => { sendCustomAction('How much would an average healthy meal cost for me') }]
  ]
  return (
    <>
      <div className="flex flex-col gap-2 max-w-lg">
        <h1>Hello there {user ? user.displayName?.split(" ")[0] : 'N/A'}!!</h1>
        <p className="text-subtext">Select quick actions to help me give you the best tip, all tips generated are tailored to your requirements from your details provided.</p>
      </div>
      <div className='flex overflow-x-auto md:flex-wrap gap-2 md:gap-3'>{
        QuickActions.map((action, i) => <button key={i} className='cursor-pointer hover:bg-secondary min-w-max px-3 md:px-4 py-2 md:py-3 border border-primary rounded-full' onClick={action[1]}>{action[0]}</button>)
      }</div>
      <ChatBox user={user} />
    </>
  );
};


export default Home;