import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';

import { createEmotionCache } from '@utils/helpers';
import MuiProvider from '@contexts/MuiContext';
import DialogProvider from '@contexts/DialogContext';
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
      <MuiProvider>
        <DialogProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </DialogProvider>
      </MuiProvider>
    </CacheProvider>
  );
}

export default MyApp;
