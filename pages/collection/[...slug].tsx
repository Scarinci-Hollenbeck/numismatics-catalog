import React from 'react';
import Head from 'next/head';
import dbConnect from '../../utils/db-connect';
import Coins, { ICoins } from '../../models/Coins';
import CollectionCoinCount, {
  ICollectionCoinCount,
} from '../../models/CollectionCoinCount';
import { makeTitle, makeUrl } from '../../utils/helpers';
import CoinList from '../../components/CoinList';

export default function Collection({ title, coins, breadCrumbs }): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{`${title} Collection -Numismatics Catalog`}</title>
        <meta
          name="description"
          content={`This is a collection of coins entitled ${title} from Donald Scarinci's vast coin collection.`}
        />
      </Head>
      <main>
        <CoinList
          collectionName={title}
          coinList={coins}
          breadCrumbLinks={breadCrumbs}
        />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  await dbConnect();

  // get a list of all the coins
  const listAllCollections: Array<ICollectionCoinCount> = await CollectionCoinCount.find({}).exec();
  return {
    paths: listAllCollections.map((collection) => `/collection/${encodeURIComponent(collection.categoryId)}/${encodeURIComponent(makeUrl(collection.categoryTitle))}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  await dbConnect();

  const allCoinsByCollection: Array<ICoins> = await Coins.find({
    categoryId: params.slug[0],
  })
    .limit(10000)
    .sort({ title: 1 })
    .exec();
  const link = `/collection/${params.slug.join(',').replace(',', '/')}`;
  const title = makeTitle(params.slug[1]);

  return {
    props: {
      title,
      coins: JSON.parse(JSON.stringify(allCoinsByCollection)) || [],
      breadCrumbs:
        [
          {
            title,
            link,
          },
        ] || [],
    },
  };
}
