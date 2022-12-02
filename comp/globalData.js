import create from "zustand";

//문제풀때 점수 보관용
const useStore = create((set) => ({
  data: 0,
  addData: () => set((state) => ({ data: state.data + 1 })),
  setData: (dataSet) => set(() => ({ data: dataSet })),
  refresh: () => set((state) => ({ data: state.data })),
}));

export default useStore;
