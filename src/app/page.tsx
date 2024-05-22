import DiscountCodeInput from '@/components/DiscountCodeInput';
import NoteInput from '@/components/NoteInput';
import Options from '@/components/Options';
import RandomDiscountCode from '@/components/RandomDiscountCode';

export default function Home() {
  return (
    <main className="pt-10 flex flex-col items-center space-y-10 ">
      <Options />

      <DiscountCodeInput />

      <RandomDiscountCode />

      <NoteInput />
    </main>
  );
}
