import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
    <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB"/>
        <link rel="apple-touch-icon" href="/icons/icon-maskable.png"></link>
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}