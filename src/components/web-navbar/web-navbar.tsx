import { poppins } from '@/utils/fonts';
import Image from 'next/image';
import Link from 'next/link';
const WebNavbar: React.FC = () => {
  return (
    <div className='hidden w-full flex-col px-8 xl:flex'>
      <div className='flex h-14 w-full items-center justify-between border-b-2'>
        <button className='relative h-5 w-5 border-none'>
          <Image src={'/search.svg'} fill alt='search button' />
        </button>
        <h1 className='text-xl'>Avion</h1>

        <div className='flex gap-4'>
          <button className='relative h-5 w-5 border-none'>
            <Image src={'/cart.svg'} fill alt='cart' />
          </button>
          <button className='relative h-5 w-5 border-none'>
            <Image src={'/user-avatar.svg'} fill alt='user avatar' />
          </button>
        </div>
      </div>
      <div
        className={`${poppins.className} flex h-12 w-full items-center justify-center font-thin`}
      >
        <ul className='flex gap-10'>
          <li className=''>
            <Link href={'/pots'}>Plant pots</Link>
          </li>
          <li className=''>
            <Link href={'/pots'}>Ceramincs</Link>
          </li>
          <li className=''>
            <Link href={'/pots'}>Tables</Link>
          </li>
          <li className=''>
            <Link href={'/pots'}>Chairs</Link>
          </li>
          <li className=''>
            <Link href={'/pots'}>Crockery</Link>
          </li>
          <li className=''>
            <Link href={'/pots'}>Tableware</Link>
          </li>
          <li className=''>
            <Link href={'/pots'}>Cutlery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WebNavbar;
