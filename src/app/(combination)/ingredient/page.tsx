import TopNavBar from '@/components/common/TopNavBar';
import IngredientsBoard from '@/components/ingredient/IngredientsBoard';
import IngredientFooter from '@/components/ingredient/IngredientFooter';
import { getIngredients } from '@/services/getIngredients';

export default async function IngredientPage() {
  const ingredients = await getIngredients();
  return (
    <>
      <TopNavBar pageName="ingredient" prevPage="/size" />
      <main className="flex h-full w-full flex-1 flex-col items-center justify-start gap-y-5 px-5 pt-[34px]">
        <h2 className="text-x_large font-semi_bold">좋아하는 재료를 선택해주세요.</h2>
        <IngredientsBoard ingredients={ingredients} />
      </main>
      <IngredientFooter nextPage="/result" ingredients={ingredients} />
    </>
  );
}
