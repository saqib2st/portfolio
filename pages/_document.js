import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-terminal-black text-terminal-green">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
