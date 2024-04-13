import { create } from "zustand";

import { BioData } from '@/constants/prompts';
import getDocument from '@/firebase/firestore/getData';

// export const immer = config => (set, get) => config(fn => set(produce(fn)), get)

interface BiodataState {
  data: BioData
  update: (uid: string) => Promise<void>
}

const useBiodata = create<BiodataState>()(set => ({
  data: {
    age: '19',
    height: '1.5',
    weight: '40',
    allergies: 'None',
    exercise: 'None',
    food: 'None'
  },
  update: async (uid: string) => {
    const { result, error } = await getDocument('biodata', uid);
    if (!error && result?.exists) {
      set((prevState) => ({
        data: { ...prevState.data, ...result.data() }
      }));
    }
  }
}));

export default useBiodata;