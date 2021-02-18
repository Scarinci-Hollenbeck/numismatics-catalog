import React from 'react';
import Head from 'next/head';
import { useUserAgent } from 'next-useragent';
import { makeUrl } from '../../utils/helpers';
import CoinDetails from '../../components/CoinDetails';
import CoinArticlesContainer from '../../components/CoinArticlesCointainer';
import { UserAgent, BreadCrumb, CoinLinkItem } from '../../interfaces';
import dbConnect from '../../utils/db-connect';
import Coins, { ICoins } from '../../models/Coins';

type Props = {
  coin: CoinLinkItem,
  breadCrumbs: BreadCrumb
  userAgent: UserAgent
}

export default function Coin({ coin, breadCrumbs, userAgent } : Props): JSX.Element {
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
        <CoinDetails userAgent={userAgent} coin={coin} crumbs={breadCrumbs} />
        <CoinArticlesContainer />
      </main>
    </>
  );
}



export async function getServerSideProps({ params, req }) {
  const singleCoin: Array<ICoins> = await Coins.find({ _id: '5f8990bcb243284938118ac2' })
    .limit(1)
    .exec();

  const link = `/coin/${params.slug.join(',').replace(',', '/')}`;
  const { title } = singleCoin[0];
  const previousLink = `/collection/${
    singleCoin[0].categoryId
  }/${makeUrl(singleCoin[0].category)}`;
  const previousTitle = singleCoin[0].category;

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
      userAgent: {
        deviceType: device,
        os: ua.os,
      },
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
