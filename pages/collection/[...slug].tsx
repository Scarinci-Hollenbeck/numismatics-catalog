import React from 'react';
import Head from 'next/head';
import { makeTitle, postFetcher } from '../../utils/helpers';
import CoinList from '../../components/CoinList';

export default function Collection({ title, coins, breadCrumbs }): JSX.Element {
  return (
    <>
      <Head>
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
      <CoinList
        collectionName={title}
        coinList={coins}
        breadCrumbLinks={breadCrumbs}
      />
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const getListOfCoins = await postFetcher(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/list-coins-by-collection`,
    JSON.stringify({
      categoryId: params.slug[0],
      limit: 10000,
    }),
  );

  const link = `/collection/${params.slug.join(',').replace(',', '/')}`;
  const title = makeTitle(params.slug[1]);

  // if(collection list is empty && res) {
  //   res.statusCode = 404;
  // };

  return {
    props: {
      title,
      coins: getListOfCoins.data || [],
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
