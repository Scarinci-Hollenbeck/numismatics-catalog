import React from 'react';
import Head from 'next/head';
import { makeTitle, postFetcher, makeUrl } from '../../utils/helpers';
import CoinDetails from '../../components/CoinDetails';
import CoinArticlesContainer from '../../components/CoinArticlesCointainer';

export default function Coin({ coin, breadCrumbs }): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{coin.title}</title>
        <meta name="description" content={coin.description} />
      </Head>
      <CoinDetails coin={coin} crumbs={breadCrumbs} />
      <CoinArticlesContainer />
    </>
  );
}

export async function getServerSideProps({ params, res, req }) {
  console.log(process.env.NEXT_PUBLIC_API_DOMAIN);
  const getSingleCoin = await postFetcher(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/single-coin`,
    JSON.stringify({ _id: params.slug[0] }),
  );

  const link = `/coin/${params.slug.join(',').replace(',', '/')}`;
  const { title } = getSingleCoin.data[0];
  const previousLink = `/collection/${
    getSingleCoin.data[0].categoryId
  }/${makeUrl(getSingleCoin.data[0].category)}`;
  const previousTitle = getSingleCoin.data[0].category;

  // if(collection list is empty && res) {
  //   res.statusCode = 404;
  // };

  return {
    props: {
      coin: getSingleCoin.data[0] || {},
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
