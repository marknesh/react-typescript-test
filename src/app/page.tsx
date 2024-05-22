import DiscountCodeInput from '@/components/DiscountCodeInput';
import Options from '@/components/Options';

export default function Home() {
  return (
    <main className="pt-10 flex flex-col items-center space-y-20 ">
      <Options />

      <DiscountCodeInput />
    </main>
  );
}
