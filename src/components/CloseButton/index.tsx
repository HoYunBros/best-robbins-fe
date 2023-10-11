'use client';
import Link from 'next/link';

import { useUserSelectStore } from '@/stores/useUserSelectStore';
import { IoClose } from 'react-icons/io5';

type Props = {
  page?: string;
};

export default function CloseButton({ page = '/' }: Props) {
  const reset = useUserSelectStore(state => state.reset);
  return (
    <Link
      href={page}
      onClick={() => {
        reset();
      }}
    >
      <IoClose size={24} className="text-gray_05-light dark:text-gray_05-dark" />
    </Link>
  );
}
