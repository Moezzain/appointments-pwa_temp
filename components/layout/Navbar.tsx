import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { account_mock } from '../../mock-data/account';

export default function Navbar() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <nav className='w-full flex items-center justify-between flex-wrap px-4'>
      <Image
        className='cursor-pointer'
        onClick={goBack}
        src='/assets/images/BackArrow.svg'
        height={15.37}
        width={12.5}
      />
      <span className='text-lg font-bold'>Apponintment</span>
      <div className='relative flex flex-row'>
        <Image src='/assets/images/bell.svg' height={21.5} width={21.4} />
        <span className='absolute w-3 h-3 border-2 font-semibold border-red-600 rounded-full top-2 -left-2 text-tiny flex items-center justify-center'>
          {' '}
          {account_mock.notification_count}{' '}
        </span>
        <div className='relative w-11 h-11 flex items-center'>
          <img
            className='rounded-full border border-gray-100 shadow-sm ml-5'
            src={account_mock.img}
            alt='user image'
          />
        </div>
      </div>
    </nav>
  );
}
