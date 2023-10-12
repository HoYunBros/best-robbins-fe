import { create } from 'zustand';

import { UserSelect } from '@/types';

type State = {
  userSelect: UserSelect;
};

type Action = {
  setUserSelectSizeId: (sizeId: number) => void;
  setUserSelectSizeValue: (sizeValue: number) => void;
  setUserSelectIngredientIds: (ingredientIds: number[]) => void;
  reset: () => void;
};

const initialState: State = {
  userSelect: {
    sizeId: 0,
    sizeValue: 0,
    ingredientIds: [],
  },
};

export const useUserSelectStore = create<State & Action>()(set => ({
  ...initialState,
  setUserSelectSizeId: (sizeId: number) =>
    set(state => ({ userSelect: { ...state.userSelect, sizeId } })),
  setUserSelectSizeValue: (sizeValue: number) =>
    set(state => ({ userSelect: { ...state.userSelect, sizeValue } })),
  setUserSelectIngredientIds: (ingredientIds: number[]) =>
    set(state => ({ userSelect: { ...state.userSelect, ingredientIds } })),
  reset: () => set(initialState),
}));
