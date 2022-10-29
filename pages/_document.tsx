import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

const APP_NAME = '고고';
const APP_DESCRIPTION = ' 등산에 필요한 등산로 서비스 고고입니다';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* meta */}
          <meta
            key="application-name"
            name="application-name"
            content={APP_NAME}
          />
          <meta
            key="apple-mobile-web-app-title"
            name="apple-mobile-web-app-title"
            content={APP_NAME}
          />
          <meta
            key="description-app-description"
            name="description"
            content={APP_DESCRIPTION}
          />
          <meta
            key="apple-mobile-web-app-capable"
            name="apple-mobile-web-app-capable"
            content="yes"
          />
          <meta
            key="apple-mobile-web-app-status-bar-style"
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            key="mobile-web-app-capable"
            name="mobile-web-app-capable"
            content="yes"
          />
          <meta key="theme-color" name="theme-color" content="#FFFFFF" />
          {/* manifest */}
          <link key="manifest" rel="manifest" href="/manifest.json" />
          <link
            key="apple-touch-icon"
            rel="apple-touch-icon"
            href="/icons/apple-icon-180x180.png"
          ></link>
          {/* favicon */}
          <link
            key="icon"
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            key="icon"
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="96x96"
          />
          <link
            key="icon"
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          {/* microsoft */}
          <meta
            key="msapplication-TileColor"
            name="msapplication-TileColor"
            content="#ffffff"
          />
          {/* splash */}
          <link
            key="apple-touch-startup-image"
            rel="apple-touch-startup-image"
            href="/splash/iphone5_splash.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          ></link>
          <link
            key="apple-touch-startup-image"
            rel="apple-touch-startup-image"
            href="/splash/iphone6_splash.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          ></link>
          <link
            key="apple-touch-startup-image"
            rel="apple-touch-startup-image"
            href="/splash/iphoneplus_splash.png"
            media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          ></link>
          <link
            key="apple-touch-startup-image"
            rel="apple-touch-startup-image"
            href="/splash/iphonex_splash.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          ></link>
          <link
            key="apple-touch-startup-image"
            rel="apple-touch-startup-image"
            href="/splash/ipad_splash.png"
            media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
          ></link>
          <link
            key="apple-touch-startup-image"
            rel="apple-touch-startup-image"
            href="/splash/ipadpro1_splash.png"
            media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
          ></link>
          <link
            key="apple-touch-startup-image"
            rel="apple-touch-startup-image"
            href="/splash/ipadpro2_splash.png"
            media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
          ></link>
          {/* font */}
          <link
            key="font-medium"
            rel="preload"
            href="/fonts/Pretendard-Medium.otf"
            as="font"
            type="font/otf"
            crossOrigin=""
          />
          <link
            key="font-regular"
            rel="preload"
            href="/fonts/Pretendard-Regular.otf"
            as="font"
            type="font/otf"
            crossOrigin=""
          />
          <link
            key="font-semi-bold"
            rel="preload"
            href="/fonts/Pretendard-SemiBold.otf"
            as="font"
            type="font/otf"
            crossOrigin=""
          />
          <link
            key="font-bold"
            rel="preload"
            href="/fonts/Pretendard-Bold.otf"
            as="font"
            type="font/otf"
            crossOrigin=""
          />
          <link
            key="font-extra-bold"
            rel="preload"
            href="/fonts/Pretendard-ExtraBold.otf"
            as="font"
            type="font/otf"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            strategy="beforeInteractive"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}&submodules=geocoder`}
          ></Script>
        </body>
      </Html>
    );
  }
}
