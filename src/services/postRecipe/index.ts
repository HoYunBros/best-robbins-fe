import { HttpClient } from '../http';

import { UserSelect } from '@/types';

export async function postRecipe(userSelectInfo: Omit<UserSelect, 'sizeValue'>) {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) throw new Error('존재하지 않는 환경변수입니다.');

  const httpClient = new HttpClient(process.env.NEXT_PUBLIC_BASE_API_URL);
  const response = await httpClient.fetch('/recipes', {
    method: 'POST',
    body: JSON.stringify(userSelectInfo),
  });
  const json = await response.json();
  return json.body;
}
