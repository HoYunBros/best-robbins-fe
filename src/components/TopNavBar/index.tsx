import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function TopNavBar() {
  return (
    <header className="flex h-16 w-full flex-row justify-between p-4">
      <Logo />
      <ThemeSwitcher />
    </header>
  );
}
