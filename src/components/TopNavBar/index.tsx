import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import BackButton from '../BackButton';
import CloseButton from '../CloseButton';

type Props = {
  pageName?: 'home' | 'size' | 'ingredient' | 'result';
  prevPage?: string;
};

export default function TopNavBar({ pageName = 'home', prevPage = '/' }: Props) {
  const isHome = pageName === 'home';
  const isProcess = !isHome;
  const processWidth = {
    size: 'w-[33%]',
    ingredient: 'w-[67%]',
    result: 'w-full',
  };

  return (
    <header className="relative flex h-16 w-full flex-col items-center justify-between">
      <div
        className={`flex h-16 w-full items-center justify-between ${
          isProcess && 'border-b-2'
        } border-gray_02-light p-4 dark:border-gray_02-dark`}
      >
        {isHome && (
          <>
            <Logo />
            <ThemeSwitcher />
          </>
        )}
        {isProcess && (
          <>
            <BackButton prevPage={prevPage} />
            <CloseButton />
          </>
        )}
      </div>
      {isProcess && (
        <div
          className={`absolute bottom-0 h-[2px] bg-gray_05-light dark:bg-gray_05-dark ${processWidth[pageName]} left-0`}
        ></div>
      )}
    </header>
  );
}
