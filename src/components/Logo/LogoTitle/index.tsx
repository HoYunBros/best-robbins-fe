'use client';
import Image from 'next/image';
import { useTheme } from '@/app/theme-provider';

export default function LogoTitle() {
  const theme = useTheme();

  return (
    <Image
      src={`/images/logo/title-${theme}.png`}
      alt="베스트라빈스 로고 타이틀"
      width={120}
      height={20}
      priority
    />
  );
}
