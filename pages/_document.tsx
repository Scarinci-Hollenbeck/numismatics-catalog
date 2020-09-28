import NextDocument, {
  Html, Head, Main, NextScript,
} from 'next/document';
import React from 'react';

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="/fonts.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
