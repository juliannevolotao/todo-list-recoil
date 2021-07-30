import '../../styles/globals.css';
import Head from 'next/head';
import {RecoilRoot} from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>10x Bank</title>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
