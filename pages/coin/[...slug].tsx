import React from 'react';
import { makeTitle, postFetcher, makeUrl } from '../../utils/helpers';
import CoinDetails from '../../components/CoinDetails';
import CoinArticlesContainer from '../../components/CoinArticlesCointainer';

export default function Coin({ coin, breadCrumbs }): JSX.Element {

  return (
    <>
      <CoinDetails coin={coin} crumbs={breadCrumbs} />
      <CoinArticlesContainer />
    </>
  )
}

export async function getServerSideProps({ params, res, req }) {
  const getSingleCoin = await postFetcher(
    'http://localhost:3000/api/single-coin',
    JSON.stringify({ _id: params.slug[0] })
  );


  const link = '/coin/' + params.slug.join(',').replace(',', '/');
  const title = getSingleCoin.data[0].title;
  const previousLink = '/collection/' + getSingleCoin.data[0].categoryId + makeUrl(getSingleCoin.data[0].category);
  const previousTitle = getSingleCoin.data[0].category;




  // if(collection list is empty && res) {
  //   res.statusCode = 404;
  // };

  return {
    props: {
      coin: getSingleCoin.data[0] || {},
      breadCrumbs:  [{
        link: previousLink,
        title: previousTitle
      },
      {
        link,
        title
      }] || []
    },
  };
}
