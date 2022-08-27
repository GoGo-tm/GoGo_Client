import React from 'react';
import SEO from '~/components/seo';
import theme from '~/constants/theme';
import GlobalStyle from '~/components/globalStyle';
import { ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next/types';
import type { ReactElement, ReactNode } from 'react';
import '~/assets/css/antd.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: false,
            useErrorBoundary: true,
          },
          mutations: {
            useErrorBoundary: true,
          },
        },
      })
  );
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SessionProvider session={session}>
            <SEO
              og={{
                type: 'article',
                siteName: '고고',
              }}
            />
            <GlobalStyle />
            {getLayout(<Component {...pageProps} />)}
          </SessionProvider>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
