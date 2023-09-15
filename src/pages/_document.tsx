import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>Weather App</title>
      </Head>
      <body className='overflow-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
