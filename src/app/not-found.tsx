import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <header></header>
      <main>Not Found Page</main>
      <footer>
        <Link href="/">홈으로</Link>
      </footer>
    </>
  );
}
