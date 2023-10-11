'use client';
import Image from 'next/image';

import { useUserSelectStore } from '@/stores/useUserSelectStore';

import { Size } from '@/types';

type Props = {
  title: string;
  sizes: Size[];
};

const getImageWidth = (size: Size) => {
  if (size.value <= 2) return 30;
  if (size.value === 3) return 24;
  return 74;
};

export default function SizeRow({ title, sizes }: Props) {
  const userSelect = useUserSelectStore(state => state.userSelect);
  const setUserSelectSize = useUserSelectStore(state => state.setUserSelectSize);

  const handleSizeClick = (id: number) => {
    if (userSelect.sizeId === id) {
      setUserSelectSize(0);
      return;
    }
    setUserSelectSize(id);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-medium font-semi_bold">{title}</p>
      <div className="flex gap-x-3">
        {sizes.map((size: Size) => (
          <button
            key={size.id}
            className="flex flex-col items-center justify-between gap-y-[10px]"
            onClick={() => {
              handleSizeClick(size.id);
            }}
          >
            <div
              className={`flex h-[74px] w-[74px] items-center justify-center rounded-2xl border-2 bg-gray_01-light dark:bg-gray_01-dark ${
                userSelect.sizeId === size.id
                  ? 'border-secondary-light'
                  : 'border-gray_01-light dark:border-gray_01-dark'
              }`}
            >
              <Image
                src={size.imageUrl}
                alt={size.name}
                width={getImageWidth(size)}
                height={30}
                priority
              />
            </div>
            <p className="text-center text-small">{size.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
