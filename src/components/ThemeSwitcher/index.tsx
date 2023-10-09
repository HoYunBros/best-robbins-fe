'use client';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

import { useTheme, useToggleTheme } from '@/app/theme-provider';

export default function ThemeSwitcher() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  return (
    <div className="flex h-9 w-[68px] flex-row justify-between gap-0.5 rounded-[50px] bg-gray_02-light p-[3px] dark:bg-gray_01-dark">
      <button
        className="bg- flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray_00-light dark:bg-gray_01-dark"
        onClick={toggleTheme}
      >
        <IoSunnyOutline className="text-gray_05-light dark:text-gray_00-light" size="16" />
      </button>
      <button
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray_02-light dark:bg-gray_05-dark"
        onClick={toggleTheme}
      >
        <IoMoonOutline className="text-gray_00-dark dark:text-gray_00-dark" size="16" />
      </button>
    </div>
  );
}
