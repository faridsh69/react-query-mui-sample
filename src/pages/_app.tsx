import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';

import { createEmotionCache } from '@utils/helpers';
import MaterialProvider from '@components/HOC/MaterialUI';
import MainLayout from '@layouts/index';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MaterialProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MaterialProvider>
    </CacheProvider>
  );
}

export default MyApp;
