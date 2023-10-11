'use client';
import Image from 'next/image';

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
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-medium font-semi_bold">{title}</p>
      <div className="flex gap-x-3">
        {sizes.map((size: Size) => (
          <div key={size.id} className="flex flex-col items-center justify-between gap-y-[10px]">
            <div className="flex h-[74px] w-[74px] items-center justify-center rounded-2xl bg-gray_01-light">
              <Image
                src={size.imageUrl}
                alt={size.name}
                width={getImageWidth(size)}
                height={30}
                priority
              />
            </div>
            <p className="text-center text-small">{size.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
