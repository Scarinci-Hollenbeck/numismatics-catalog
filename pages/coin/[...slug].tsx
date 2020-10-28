import React from 'react';
import Head from 'next/head';
import { useUserAgent } from 'next-useragent';
import { postFetcher, makeUrl } from '../../utils/helpers';
import CoinDetails from '../../components/CoinDetails';
import CoinArticlesContainer from '../../components/CoinArticlesCointainer';
import { UserAgent, BreadCrumb, CoinLinkItem } from '../../interfaces'

type Props = {
  coin: CoinLinkItem,
  breadCrumbs: BreadCrumb
  userAgent: UserAgent
}

export default function Coin({ coin, breadCrumbs, userAgent } : Props ): JSX.Element {
  
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

  // get current device
  const ua = useUserAgent(req.headers['user-agent'])
  let device

  if (ua.isDesktop) {
    device = 'desktop'
  }

  if (ua.isMobile) {
    device = 'mobile'
  }

  if (ua.isTablet) {
    device = 'tablet'
  }

  return {
    props: {
      userAgent: {
        deviceType: device,
        os: ua.os,
      },
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
