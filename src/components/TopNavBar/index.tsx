import Link from 'next/link';

import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { IoChevronBack, IoClose } from 'react-icons/io5';

type Props = {
  type: 'home' | 'process';
  prevPage?: string;
};

export default function TopNavBar({ type, prevPage = '/' }: Props) {
  const isHome = type === 'home';
  const isProcess = type === 'process';
  return (
    <header className="flex h-16 w-full flex-row items-center justify-between p-4">
      {isHome && (
        <>
          <Logo />
          <ThemeSwitcher />
        </>
      )}
      {isProcess && (
        <>
          <Link href={prevPage}>
            <IoChevronBack size={24} className="text-gray_05-light dark:text-gray_05-dark" />
          </Link>
          <Link href="/">
            <IoClose size={24} className="text-gray_05-light dark:text-gray_05-dark" />
          </Link>
        </>
      )}
    </header>
  );
}
