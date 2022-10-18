import '~/assets/css/variables.less';

import type { DehydratedState } from '@tanstack/react-query';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next/types';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '~/components/globalStyle';
import SEO from '~/components/seo';
import theme from '~/constants/theme';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<T> = AppProps<T> & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, dehydratedState, ...pageProps },
}: AppPropsWithLayout<{ session: Session; dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(
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
        <Hydrate state={dehydratedState}>
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
