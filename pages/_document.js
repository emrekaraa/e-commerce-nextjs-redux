import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset="UTF-8" />
          <meta name="description" content="Next-Js E-Commerce Tutorial" />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, React.Js, Next.js, Redux"
          />
          <meta name="author" content="Emre Kara" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
          <title>E-Commerce Tutorial</title>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
