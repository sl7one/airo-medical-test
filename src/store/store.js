import axios from "axios";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// interface IBear {
//   id: number;
//   name: string;
// }

// interface IBearsStore {
//   bears: IBear[];
//   isLoading: boolean;
//   error: string;
//   fetch: () => Promise<void>;
// }

export const useBearsStore = create(
  devtools(
    persist(
      (set, get) => ({
        bears: [],
        isLoading: false,
        error: "",
        page: 1,

        fetch: async (page = 1) => {
          set({ isLoading: true });
          try {
            const { data } = await axios.get(
              `https://api.punkapi.com/v2/beers?page=${page}`
            );
            const newData = data.map(el => ({
              ...el,
              isChoosed: false,
              isDeleted: false,
            }));
            set(prev => ({ bears: [...prev.bears, ...newData] }));
          } catch (error) {
            set({ error: error.message });
          } finally {
            set({ isLoading: false });
          }
        },
        toggleChoosenItem: id => {
          const list = get().bears;
          const idx = list.findIndex(el => el.id === id);
          const item = list.find(el => el.id === id);

          const updateItem = {
            ...item,
            isChoosed: item.isChoosed ? false : true,
          };

          list.splice(idx, 1, updateItem);
          set({ bears: [...list] });
        },
        deleteChoosedItems: function () {
          const list = get().bears;
          const updatedList = list.map(el =>
            el.isChoosed ? { ...el, isDeleted: true } : el
          );
          set({ bears: updatedList });
        },
        getByName: name => {
          const list = get().bears;
          return list.find(el => el.name === name);
        },
        setPage: () => {
          set(prev => ({
            page: prev.page + 1,
          }));
        },
      }),
      { name: "bears" }
    )
  )
);
