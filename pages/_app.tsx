import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';
import type { AppProps } from 'next/app';
import Navbar from '../components/layout/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
  });
  return (
    <ApolloProvider client={client}>
      <div className='w-full flex flex-col items-center'>
        <div className='w-full flex flex-col max-w-4xl items-center'>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
