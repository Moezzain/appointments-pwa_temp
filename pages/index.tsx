import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Appointments Application</title>
        <meta name='description' content='Appointment creation flow' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Link href='/appointment'>
        <span className='text-blue-700 cursor-pointer'>Create Appointment</span>
      </Link>
    </div>
  );
};

export default Home;
