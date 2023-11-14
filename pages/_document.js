import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />

        <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
