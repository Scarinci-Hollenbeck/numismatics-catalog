import type { AppProps } from 'next/app'
import '../styles/main.scss'
import '../styles/coin-upload.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
