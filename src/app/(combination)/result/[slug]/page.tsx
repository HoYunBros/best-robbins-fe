import { notFound } from 'next/navigation';

import TopNavBar from '@/components/common/TopNavBar';
import RecipeCard from '@/components/common/RecipeCard';
import ResultFooter from '@/components/result/ResultFooter';
import { getRecipe } from '@/services/getRecipe';

type Props = {
  params: {
    slug: string;
  };
};

export default async function ResultPage({ params }: Props) {
  const recipeId = parseInt(params.slug, 10);

  if (Number.isNaN(recipeId)) {
    notFound();
  }

  const result = await getRecipe(recipeId);
  return (
    <>
      <TopNavBar pageName="result" prevPage="/ingredient" />
      <main className="flex h-full w-full flex-1 flex-col items-center justify-start gap-y-5 px-5 pt-[34px]">
        <h2 className="text-x_large font-semi_bold">나만의 꿀조합을 찾았어요!</h2>
        <div
          className={`relative flex h-[460px] w-[340px] items-center justify-center rounded-3xl shadow-light transition-all dark:shadow-dark`}
        >
          <RecipeCard recipe={result} hasBookmark={true} />
        </div>
      </main>
      <ResultFooter nextPage="/size" />
    </>
  );
}
