import Image from 'next/image';

import LogoCharacter from './LogoCharacter';
import LogoTitle from './LogoTitle';

export default function Logo() {
  return (
    <section className="flex items-center justify-between gap-[6px]">
      <LogoCharacter />
      <LogoTitle />
    </section>
  );
}
