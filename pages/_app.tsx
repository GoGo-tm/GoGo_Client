import type { AppProps } from 'next/app';
import type { NextPage } from 'next/types';
import type { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import '~/assets/antd.css';
import GlobalStyle from '~/components/globalStyle';
import SEO from '~/components/seo';
import theme from '~/constants/theme';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <SEO
        og={{
          type: 'article',
          siteName: '고고',
        }}
      />
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
