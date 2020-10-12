import React from 'react';
import useSWR from 'swr';
import CoinListItem from './CoinListItem';
import { makeTitle, getFetcher, postFetcher } from '../utils/helpers';

export default async function AdminCoinList({ collection, categoryId }) {
  let coinList;

  if(collection !== 'none') {
    coinList = await postFetcher(
      'http://localhost:3000/api/list-coins-by-collection',
      JSON.stringify({
        categoryId,
        limit: -1
      }),
    );
  }

  if(collection === 'none') {
    const { data, error } = useSWR('/api/list-all-coins', getFetcher);
    coinList = data;
  }
  

  // if no collection get all the coins

  return (
    <section className="admin-coin-list">
      <h2>List of coins
      {(collection !== 'none') && <> in {makeTitle(collection)} </>}
      </h2>
      <hr />
      <ul className="list">
        {(coinList !== undefined && coinList.data.length > 0) && coinList.data.map((coin) => (
            <CoinListItem key={coin._id} coin={coin} />
        ))}
      </ul>
      <style jsx>
        {`
          section {
            background-color: #fff;
            box-shadow: 2px 4px 20px #a9a9a9;
            max-width: 100%;
            padding: 1em;
            margin-top: 3em;
          }

          section h2 {
            font-family: 'Tajawal Regular';
            font-size: 2rem;
            margin: 0;
            padding: 0;
            text-align: left;
            color: #2980B9;
          }

          section hr {
            background-color: #2980B9;
            border: 0;
            height: 5px;
            border-radius: 5px;
          }

          section ul {
            margin: 0;
            padding: 0;
            text-align: left;
            margin-top: 1em;
          }
        `}
      </style>
    </section>
  )
}