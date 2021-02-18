import React from 'react';
import Head from 'next/head';
import { useUserAgent } from 'next-useragent';
import dbConnect from '../utils/db-connect';
import CollectionCoinCount, {
  ICollectionCoinCount,
} from '../models/CollectionCoinCount';
import CoinSliderCointainer from '../components/CoinSliderContainer';
import CollectionList from '../components/CollectionList';
import CoinArticlesContainer from '../components/CoinArticlesCointainer';
import { UserAgent, CollectionLinkItem } from '../interfaces';

type Props = {
  userAgent: UserAgent,
  listOfCollections: CollectionLinkItem[]
}

export default function Home({ userAgent, listOfCollections }: Props): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Donald Scarinci&apos;s Numismatics Catalog</title>
        <meta
          name="description"
          content="Donald Scarinci's Numismatics Catalog contains a collection of rare and historical coins collected and currated by Donald. We hope you enjoy!"
        />
      </Head>
      <main>
        <CoinSliderCointainer userAgent={userAgent} />
        <CollectionList
          authed={false}
          collections={listOfCollections}
        />
        <CoinArticlesContainer />
      </main>
      <style jsx>
        {`
        main {
          margin-top: 2em;
          margin-bottom: 2em;
        }
      `}
      </style>
    </>
  );
}

export async function getServerSideProps({ req }) {
  await dbConnect();
  // get a list of all the coins
  const listAllCollections: Array<ICollectionCoinCount> = await CollectionCoinCount.find(
    {},
  );

  const formattedCoins = listAllCollections.map((item) => ({
    id: item.categoryId,
    title: item.categoryTitle,
    count: item.count,
  }));

  // get current device
  const ua = useUserAgent(req.headers['user-agent']);
  let device;

  if (ua.isDesktop) {
    device = 'desktop';
  }

  if (ua.isMobile) {
    device = 'mobile';
  }

  if (ua.isTablet) {
    device = 'tablet';
  }

  return {
    props: {
      listOfCollections: JSON.parse(JSON.stringify(formattedCoins)) || [],
      userAgent: {
        deviceType: device,
        os: ua.os,
      },
    },
  };
}
