'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiHomeLine, RiHomeFill } from 'react-icons/ri';
import { PiSmiley, PiSmileyFill } from 'react-icons/pi';

export default function GlobalNavBar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isUser = pathname === '/user';
  return (
    <footer className="flex h-20 w-full flex-row justify-around border-t border-t-gray_01-light p-2 pb-8 dark:border-t-gray_01-dark">
      <Link href="/" className="flex flex-col items-center justify-start">
        {isHome && (
          <>
            <RiHomeFill className="text-primary-light" size="24" />
            <p className="text-x_small text-primary-light">홈</p>
          </>
        )}
        {isUser && (
          <>
            <RiHomeLine className="text-gray_04-light dark:text-gray_03-dark" size="24" />
            <p className="text-x_small text-gray_04-light dark:text-gray_03-dark">홈</p>
          </>
        )}
      </Link>
      <Link href="/user" className="flex flex-col items-center justify-start">
        {isHome && (
          <>
            <PiSmiley className="text-gray_04-light dark:text-gray_03-dark" size="24" />
            <p className="text-x_small text-gray_04-light dark:text-gray_03-dark">마이</p>
          </>
        )}
        {isUser && (
          <>
            <PiSmileyFill className="text-primary-light" size="24" />
            <p className="text-x_small text-primary-light">마이</p>
          </>
        )}
      </Link>
    </footer>
  );
}
