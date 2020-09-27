import React from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import { useUserAgent } from 'next-useragent'
import { getFetcher } from '../utils/helpers';
import CoinSliderCointainer from '../components/CoinSliderContainer';

type Props = {
  deviceType: string
}
export default function Home({ deviceType }: Props): JSX.Element {
  const { data: listOfCollections, error: collectionsError } = useSWR('/api/list-all-collections', getFetcher);
  
  return (
    <>
     <Head>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
     </Head>
      <div id="numismatics-app">
        <h1>Donald Scarinci's</h1>
        <h2>Numismatics Catalog</h2>
        <hr />
        <CoinSliderCointainer />

        <style jsx>{`

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

            h2 {
              font-family: 'Tajawal Bold';
              font-size: 2.5rem;
              margin-top: 0;
              padding-top: 0;
              margin-bottom: 25px;
            }
        
        `}</style>        
      </div>
    </>
  )
}

export function getServerSideProps({ req }) {
  // get current device
  const ua = useUserAgent(req.headers['user-agent'])
  let deviceType

  if (ua.isDesktop) {
    deviceType = 'desktop'
  }

  if (ua.isMobile) {
    deviceType = 'mobile'
  }

  if (ua.isTablet) {
    deviceType = 'tablet'
  }
  return {
    props: {
      deviceType,
    },
  }
}
