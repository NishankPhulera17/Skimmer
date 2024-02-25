
import { create } from "zustand";

const useSelectedModel = create((set) => ({
    model: "",
    setModel: (mod) => set((state)=>({ model: mod })) ,
  getSelectedModel: () => set((state) => state.model),
  consoleLog: () => set((state) => console.log(state.model)),
}));

export default useSelectedModel;
