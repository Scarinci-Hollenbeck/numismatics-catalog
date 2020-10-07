import React from 'react';
import { makeTitle, postFetcher } from '../../utils/helpers';
import CoinList from '../../components/CoinList';

export default function Collection({
  title,
  coins,
  breadCrumbs
}): JSX.Element {

  return <CoinList collectionName={title} coinList={coins} breadCrumbLinks={breadCrumbs} />
}

export async function getServerSideProps({ params, res }) {
  const getListOfCoins = await postFetcher(
    'http://localhost:3000/api/list-coins-by-collection',
    JSON.stringify({
      categoryId:params.slug[0],
      limit: -1
    }),
  );

  const link = '/collection/' + params.slug.join(',').replace(',', '/');
  const title = makeTitle(params.slug[1]);

  // if(collection list is empty && res) {
  //   res.statusCode = 404;
  // };

  return {
    props: {
      title,
      coins: getListOfCoins.data || [],
      breadCrumbs: [{
        title,
        link
      }] || []
    },
  };
}
