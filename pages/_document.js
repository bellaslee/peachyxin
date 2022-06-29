import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap"
              rel="stylesheet" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="description" content="Web site created using create-react-app" />
              <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

              <title>peachyxin</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}