import type { AppProps } from 'next/app';
import 'react-multi-carousel/lib/styles.css';
import '../styles/upload-icon.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
