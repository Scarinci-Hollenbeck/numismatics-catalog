import React from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import { useUserAgent } from 'next-useragent';
import { getFetcher } from '../utils/helpers';
import CoinSliderCointainer from '../components/CoinSliderContainer';
import CollectionList from '../components/CollectionList';
import CoinArticlesContainer from '../components/CoinArticlesCointainer';

type Props = {
  deviceType: string
}

export default function Home({ deviceType }: Props): JSX.Element {
  const { data: listOfCollections, error: collectionsError } = useSWR(
    '/api/list-all-collections',
    getFetcher,
  );

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Donald Scarinci&apos;s Numismatics Catalog</title>
        <meta
          name="description"
          content="Donald Scarinci&apos;s Numismatics Catalog contains a collection of rare and historical coins collected and currated by Donald. We hope you enjoy!"
        />
      </Head>
      <main>
        <CoinSliderCointainer deviceType={deviceType} />
        {listOfCollections !== undefined
          && listOfCollections.data.length > 0 && (
            <CollectionList
              authed={false}
              collections={listOfCollections.data}
            />
        )}
        <CoinArticlesContainer />
      </main>
      <style jsx>
        {`
          main {
            margin-top: 3em;
          }
        `}
      </style>
    </>
  );
}

export async function getServerSideProps({ req }) {
  // get current device
  const ua = useUserAgent(req.headers['user-agent']);
  let deviceType;

  if (ua.isDesktop) {
    deviceType = 'desktop';
  }

  if (ua.isMobile) {
    deviceType = 'mobile';
  }

  if (ua.isTablet) {
    deviceType = 'tablet';
  }

  return {
    props: {
      deviceType,
    },
  };
}
