import Image from 'next/image';

import LogoTitle from '@/components/Logo/LogoTitle';

export default function Logo() {
  return (
    <section className="flex items-center justify-between gap-[6px]">
      <Image
        src="/images/logo/character.png"
        alt="베스트라빈스 로고 캐릭터"
        width={36}
        height={36}
      />
      <LogoTitle />
    </section>
  );
}
