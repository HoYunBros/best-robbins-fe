'use client';
import Link from 'next/link';

import { useUserSelectStore } from '@/stores/useUserSelectStore';

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

  return (
    <footer className="relative flex h-20 w-full flex-col items-center justify-around border-t border-t-gray_00-light p-2 pb-8 dark:border-t-gray_00-dark">
      {!isSelected || isAbleToRecommend || (
        <p className="absolute top-[-20px] text-small font-semi_bold text-gray_05-light dark:text-gray_05-dark">
          재료를 조금 더 골라볼까요?
        </p>
      )}
      <Link
        href={disabled ? '#' : nextPage}
        className={`flex h-12 w-[340px] items-center justify-center rounded-lg border-0 bg-primary-light px-6 text-medium font-semi_bold text-white-light
        ${disabled && 'cursor-not-allowed opacity-50'}`}
      >
        결과보기
      </Link>
    </footer>
  );
}
