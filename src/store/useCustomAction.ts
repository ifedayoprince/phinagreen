import { create } from "zustand";


interface CustomActionState {
  message: string | null;
  sendMessage: (message: string | null) => void;
}

const useCustomAction = create<CustomActionState>()(set => ({
  message: null,
  sendMessage: message => set({ message })
}));

export default useCustomAction;