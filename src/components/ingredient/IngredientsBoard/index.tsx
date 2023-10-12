'use client';
import Image from 'next/image';

import { useUserSelectStore } from '@/stores/useUserSelectStore';
import { Ingredient } from '@/types';

type Props = {
  ingredients: Ingredient[];
};

export default function IngredientsBoard({ ingredients }: Props) {
  const userSelect = useUserSelectStore(state => state.userSelect);
  const setUserSelectIngredientIds = useUserSelectStore(state => state.setUserSelectIngredientIds);

  const handleIngredientClick = (id: number) => {
    if (userSelect.ingredientIds.includes(id)) {
      setUserSelectIngredientIds(
        userSelect.ingredientIds.filter(ingredientId => ingredientId !== id),
      );
      return;
    }
    setUserSelectIngredientIds([...userSelect.ingredientIds, id]);
  };

  return (
    <div className="flex h-full flex-col items-center justify-between">
      <div className="flex flex-wrap gap-x-2">
        {ingredients.map((ingredient: Ingredient) => (
          <button
            key={ingredient.id}
            className="flex flex-col items-center justify-between gap-y-[10px]"
            onClick={() => {
              handleIngredientClick(ingredient.id);
            }}
          >
            <div
              className={`flex h-fit w-fit items-center justify-center rounded-full border-[3px] ${
                userSelect.ingredientIds.includes(ingredient.id)
                  ? 'border-secondary-light'
                  : 'border-gray_00-light dark:border-gray_00-dark'
              }`}
            >
              <Image
                src={ingredient.imageUrl}
                alt={ingredient.name}
                width={56}
                height={56}
                priority
                className="rounded-full"
              />
            </div>
            <p className="text-center text-small">{ingredient.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
