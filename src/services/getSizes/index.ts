import { HttpClient } from '../http';

export async function getSizes() {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) throw new Error('존재하지 않는 환경변수입니다.');

  const httpClient = new HttpClient(process.env.NEXT_PUBLIC_BASE_API_URL);
  const response = await httpClient.fetch('/sizes');
  const json = await response.json();
  return json.body;
}
