import TopNavBar from '@/components/TopNavBar';
import SizeRow from '@/components/SizeRow';
import FooterButton from '@/components/FooterButton';
import { getSizes } from '@/services/getSizes';

export default async function SizePage() {
  const sizes = await getSizes();
  const sizeCount = sizes.length;
  const oneFlavorSizes = sizes.slice(0, 2);
  const twoFlavorSizes = sizes.slice(2, 4);
  const otherSizes = sizes.slice(4, sizeCount);

  return (
    <>
      <TopNavBar pageName="size" prevPage="/" />
      <main className="flex h-full w-full flex-1 flex-col justify-start gap-y-5 px-5 pt-[34px]">
        <div className="text-x_large font-semi_bold">어떤 사이즈를 드시나요?</div>
        <SizeRow title="1가지 맛" sizes={oneFlavorSizes} />
        <SizeRow title="2가지 맛" sizes={twoFlavorSizes} />
        <SizeRow title="3가지 맛 이상" sizes={otherSizes} />
      </main>
      <FooterButton nextPage="/ingredient" />
    </>
  );
}
