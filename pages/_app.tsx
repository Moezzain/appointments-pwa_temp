import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/layout/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-full flex flex-col max-w-4xl items-center'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
