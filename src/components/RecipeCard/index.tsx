import Image from 'next/image';

import { getImageWrapperWidth } from '@/utils/getImageWrapperWidth';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';

import { Recipe } from '@/types';

type Props = {
  recipe: Recipe;
  hasBookmark?: boolean;
};

export default function RecipeCard({ recipe, hasBookmark = false }: Props) {
  const flavors = recipe.flavors;
  const flavorCount = flavors.length;
  const flavorsFirstRow = flavors.slice(0, 2);
  const flavorsSecondRow = flavors.slice(2, 4);
  const flavorsThirdRow = flavors.slice(4, flavorCount);
  const recipeName = recipe.recipeName;
  const recipeNameNounCount = recipeName.split(' ').length;
  const recipeNameStartRow = recipeName.split(' ').slice(0, 2).join(' ');
  const recipeNameEndRow = recipeName.split(' ').slice(2, recipeNameNounCount).join(' ');

  return (
    <div className="flex h-full w-full flex-col items-center justify-start rounded-3xl bg-white-light px-4 py-8 dark:bg-gray_01-dark">
      <div className="flex h-2/5 flex-col gap-2">
        {hasBookmark && (
          <div className="flex items-center justify-end">
            <FaRegBookmark size={28} className="text-gray_05-light dark:text-gray_05-dark" />
          </div>
        )}
        <div className="flex flex-col items-center justify-center text-x_large font-bold">
          <div>{recipeNameStartRow}</div>
          <div>{recipeNameEndRow}</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>
            {flavorsFirstRow.map(flavor => flavor.flavorName).join(' + ')}
            {flavorCount >= 3 && ' + '}
          </p>
          <p>
            {flavorsSecondRow.map(flavor => flavor.flavorName).join(' + ')}
            {flavorCount >= 5 && ' + '}
          </p>
          <p>{flavorsThirdRow.map(flavor => flavor.flavorName).join(' + ')}</p>
        </div>
      </div>
      <div
        className={`flex h-3/5 flex-wrap content-center items-center justify-center gap-x-2`}
        // FIXME: tailwindcss className으로 동적으로 width를 조정하기
        style={{ width: getImageWrapperWidth(flavorCount) }}
      >
        {recipe.flavors.map(flavor => (
          <Image
            key={flavor.id}
            src={flavor.imageUrl}
            alt={flavor.flavorName}
            width={80}
            height={85}
          />
        ))}
      </div>
    </div>
  );
}
