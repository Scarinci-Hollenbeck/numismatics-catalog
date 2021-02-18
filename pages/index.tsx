import React from 'react';
import Head from 'next/head';
import dbConnect from '../utils/db-connect';
import CollectionCoinCount, {
  ICollectionCoinCount,
} from '../models/CollectionCoinCount';
import CoinSliderCointainer from '../components/CoinSliderContainer';
import CollectionList from '../components/CollectionList';
import CoinArticlesContainer from '../components/CoinArticlesCointainer';
import { CollectionLinkItem } from '../interfaces';

type Props = {
  listOfCollections: CollectionLinkItem[]
}

export default function Index({ listOfCollections }: Props): JSX.Element {
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
        <CoinSliderCointainer />
        <CollectionList authed={false} collections={listOfCollections} />
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

export async function getStaticProps() {
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

  return {
    props: {
      listOfCollections: JSON.parse(JSON.stringify(formattedCoins)) || [],
    },
  };
}
