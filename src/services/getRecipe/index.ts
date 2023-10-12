import { HttpClient } from '../http';

import { Recipe } from '@/types';

export async function getRecipe(recipeId: number): Promise<Recipe> {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) throw new Error('존재하지 않는 환경변수입니다.');

  const httpClient = new HttpClient(process.env.NEXT_PUBLIC_BASE_API_URL);
  const response = await httpClient.fetch(`/recipes/${recipeId}`);
  const json = await response.json();
  return json.body;
}
