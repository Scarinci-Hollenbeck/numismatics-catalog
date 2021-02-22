import React from 'react';
import Head from 'next/head';
import { makeUrl } from '../../utils/helpers';
import CoinDetails from '../../components/CoinDetails';
import CoinArticlesContainer from '../../components/CoinArticlesCointainer';
import { BreadCrumb, CoinLinkItem } from '../../interfaces';
import dbConnect from '../../utils/db-connect';
import Coins, { ICoins } from '../../models/Coins';

type Props = {
  coin: CoinLinkItem
  breadCrumbs: BreadCrumb
}

export default function Coin({
  coin,
  breadCrumbs,
}: Props): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{coin.title}</title>
        <meta name="description" content={coin.description} />
      </Head>
      <main>
        <CoinDetails coin={coin} crumbs={breadCrumbs} />
        <CoinArticlesContainer />
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const singleCoin: Array<ICoins> = await Coins.find({
    _id: params.slug[0],
  })
    .limit(1)
    .exec();

  const link = `/coin/${params.slug.join(',').replace(',', '/')}`;
  const { title } = singleCoin[0];
  const previousLink = `/collection/${singleCoin[0].categoryId}/${makeUrl(
    singleCoin[0].category,
  )}`;
  const previousTitle = singleCoin[0].category;

  return {
    props: {
      coin: JSON.parse(JSON.stringify(singleCoin[0])) || {},
      breadCrumbs:
        [
          {
            link: previousLink,
            title: previousTitle,
          },
          {
            link,
            title,
          },
        ] || [],
    },
  };
}
