import type { AppProps } from 'next/app';
import Link from 'next/link';
import 'react-multi-carousel/lib/styles.css';
import '../styles/icons.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="numismatics-app">
      <header>
        <Link href="/">
          <a>
            <h1>Donald Scarinci&apos;s</h1>
          </a>
        </Link>
        <h2>Numismatics Catalog</h2>
        <hr />
      </header>
      <Component {...pageProps} />
      <style jsx>
          {`
            div {
              text-align: center;
              max-width: 1200px;
              margin-left: auto;
              margin-right: auto;
            }
            h1 {
              font-family: 'Tajawal Bold';
              font-size: 3rem;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            a {
              color: black;
              text-decoration: none;
            }
            
            a:hover {
              text-decoration: underline;
              cursor: pointer;
            }
            h2 {
              font-family: 'Tajawal Bold';
              font-size: 2.5rem;
              margin-top: 0;
              padding-top: 0;
              margin-bottom: 25px;
            }
          `}
        </style>
    </div>
  );
}

export default MyApp;
