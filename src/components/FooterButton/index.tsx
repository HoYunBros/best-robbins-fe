import Link from 'next/link';

type Props = {
  nextPage: string;
};

export default function FooterButton({ nextPage }: Props) {
  return (
    <footer className="flex h-20 w-full flex-row justify-around border-t border-t-gray_00-light p-2 pb-8 dark:border-t-gray_00-dark">
      <Link
        href={nextPage}
        className="flex h-12 w-[340px] items-center justify-center rounded-lg border-0 bg-primary-light px-6 text-medium font-semi_bold text-white-light"
      >
        다음
      </Link>
    </footer>
  );
}
