import fullNameLogo from '@/src/images/full_name_logo.svg'
import Image from 'next/image';

export default async function Home() {

  return (
    <main>
      <Image src={fullNameLogo} width={500} alt="Full Name Logo" />
    </main>
  );
}