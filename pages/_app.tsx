import type { AppProps } from 'next/app';
import Link from 'next/link';

import '../styles/globals.css';
import 'react-multi-carousel/lib/styles.css';
import '../styles/icons.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="numismatics-app">
      <header>
        <div className="header">
            <h1>DONALD<br/>SCARINCI</h1>       
            <h2>Numismatics Catalog</h2>  
        </div>     
      </header>
      <Component {...pageProps} />
      <footer>
        <p className="footer">
          Donald Scarinci Copyright 2020
        </p>
      </footer>
      <style jsx>
        {`
          .header {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }

          h1 {
            font-family: 'Tajawal ExtraBold';
            letter-spacing: -5px;
            font-size: 3.2rem;
            color: #FFF;
            line-height: .7;
          }

          h2 {
            font-family: Garamond;
            color: #FFF;
            font-size: 1.3rem;
            margin-top: 1.4em;
          }

          footer {
            font-family: 'Tajawal Regular';
            font-size: 1.2rem;
            padding: 1em;
            color: #fff;
            text-align: center;
          }

          header, footer {
            background-color: #021F59;
          }
        `}
      </style>
    </div>
  );
}

export default MyApp;
