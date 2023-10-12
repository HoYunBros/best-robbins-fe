import Link from 'next/link';

import { IoChevronBack } from 'react-icons/io5';

type Props = {
  prevPage: string;
};

export default function BackButton({ prevPage }: Props) {
  return (
    <Link href={prevPage}>
      <IoChevronBack size={24} className="text-gray_05-light dark:text-gray_05-dark" />
    </Link>
  );
}
