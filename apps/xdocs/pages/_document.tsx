import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentInitialProps, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          {/* Preload Space Grotesk 400 */}
          <link
            rel="preload"
            as="font"
            href="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXskPMBBSSJLm2E.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Preload Space Grotesk 500 */}
          <link
            rel="preload"
            as="font"
            href="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7aUXskPMBBSSJLm2E.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Preload Inter 400 */}
          <link
            rel="preload"
            as="font"
            href="https://fonts.gstatic.com/s/inter/v12/UcCo3FwrK3iLTcviYwY.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Preload Inter 500 */}
          <link
            rel="preload"
            as="font"
            href="https://fonts.gstatic.com/s/inter/v12/UcCo3FwrK3iLTcviYwY.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Preload Inter 600 */}
          <link
            rel="preload"
            as="font"
            href="https://fonts.gstatic.com/s/inter/v12/UcCo3FwrK3iLTcviYwY.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Preload Inter 700 */}
          <link
            rel="preload"
            as="font"
            href="https://fonts.gstatic.com/s/inter/v12/UcCo3FwrK3iLTcviYwY.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
