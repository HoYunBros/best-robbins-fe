import { create } from 'zustand';

import { UserSelect } from '@/types';

type State = {
  userSelect: UserSelect;
};

type Action = {
  setUserSelectSize: (sizeId: number) => void;
  setUserSelectIngredientIds: (ingredientIds: number[]) => void;
  reset: () => void;
};

const initialState: State = {
  userSelect: {
    sizeId: 0,
    ingredientIds: [],
  },
};

export const useUserSelectStore = create<State & Action>()(set => ({
  ...initialState,
  setUserSelectSize: (sizeId: number) =>
    set(state => ({ userSelect: { ...state.userSelect, sizeId } })),
  setUserSelectIngredientIds: (ingredientIds: number[]) =>
    set(state => ({ userSelect: { ...state.userSelect, ingredientIds } })),
  reset: () => set(initialState),
}));
