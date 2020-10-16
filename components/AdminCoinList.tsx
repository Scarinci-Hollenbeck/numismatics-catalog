import React from 'react';
import useSWR from 'swr';
import CoinListItem from './CoinListItem';
import { makeTitle } from '../utils/helpers';
import { LinkItem } from '../interfaces';

type Props = {
  collectionName: string
  collectionList: LinkItem[]
}
export default function AdminCoinList({ collectionName, coinList }) {
  return (
    <section className="admin-coin-list">
      <h2>
        List of coins
        {collectionName !== 'none' && (
          <>
            {' '}
            in
            {makeTitle(collectionName)}
          </>
        )}
      </h2>
      <hr />
      <ul className="list">
        {coinList.map((coin) => (
          <CoinListItem key={coin._id} coin={coin} authed />
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
            color: #2980b9;
          }

          section hr {
            background-color: #2980b9;
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
  );
}
