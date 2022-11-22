import create from "zustand";

const useStore = create((set) => ({
  data: 0,
  addData: (dataSet) => set((state) => ({ data: state.data + dataSet })),
  setData: (dataSet) => set((state) => ({ data: dataSet })),
}));

export default useStore;
