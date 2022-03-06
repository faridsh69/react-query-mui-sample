import { useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate, QueryClientProvider } from 'react-query';

import { createEmotionCache, getQueryClient } from '@utils/helpers';
import MuiProvider from '@contexts/MuiContext';
import DialogProvider from '@contexts/DialogContext';
import SnackbarProvider from '@contexts/SnackbarContext';
import MainLayout from '@layouts/index';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const [queryClient] = useState(getQueryClient);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MuiProvider>
        <DialogProvider>
          <SnackbarProvider>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <MainLayout>
                  <Component {...pageProps} />
                </MainLayout>
                <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
              </Hydrate>
            </QueryClientProvider>
          </SnackbarProvider>
        </DialogProvider>
      </MuiProvider>
    </CacheProvider>
  );
}

export default MyApp;
