import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: " Sri's Blog",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
