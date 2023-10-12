'use client';
import { useRouter } from 'next/navigation';

import { useUserSelectStore } from '@/stores/useUserSelectStore';
import { postRecipe } from '@/services/postRecipe';

import { Ingredient } from '@/types';

type Props = {
  nextPage: string;
  ingredients: Ingredient[];
};

export default function IngredientFooter({ nextPage, ingredients }: Props) {
  const userSelect = useUserSelectStore(state => state.userSelect);

  const allFlavorIdList = userSelect.ingredientIds
    .map(id => ingredients.find(ingredient => ingredient.id === id)?.flavorIdList)
    .flat();
  const flavorIdList = allFlavorIdList.filter(
    (item, index) => allFlavorIdList.indexOf(item) === index,
  );
  const isAbleToRecommend = flavorIdList.length >= userSelect.sizeValue;
  const isSelected = userSelect.ingredientIds.length !== 0;
  const disabled = !isAbleToRecommend;

  const router = useRouter();

  return (
    <footer className="relative flex h-20 w-full items-center justify-around border-t border-t-gray_00-light p-2 pb-8 dark:border-t-gray_00-dark">
      {!isSelected || isAbleToRecommend || (
        <p className="absolute top-[-32px] text-small font-semi_bold text-gray_05-light dark:text-gray_05-dark">
          재료를 조금 더 골라볼까요?
        </p>
      )}
      <button
        className={`flex h-12 w-[340px] items-center justify-center rounded-lg border-0 bg-primary-light px-6 text-medium font-semi_bold text-white-light
        ${disabled && 'cursor-not-allowed opacity-50'}`}
        onClick={async () => {
          if (disabled) return;
          const { id } = await postRecipe(userSelect);
          router.push(`${nextPage}/${id}`);
        }}
      >
        결과보기
      </button>
    </footer>
  );
}
