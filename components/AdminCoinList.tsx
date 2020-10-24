import React from 'react';
import useSWR from 'swr';
import CoinListItem from './CoinListItem';
import { makeTitle } from '../utils/helpers';
import { CollectionLinkItem } from '../interfaces';

type Props = {
  collectionName: string
  collectionList: CollectionLinkItem[]
}
export default function AdminCoinList({ collectionName, coinList }) {
  return (
    <section className="admin-coin-list">
      <h2>
        LIST OF COINS
      </h2>
      <ul className="list">
        {coinList.map((coin) => (
          <CoinListItem key={coin._id} coin={coin} authed />
        ))}
      </ul>
      <style jsx>
        {`
          section {
            background-color: #fff;
            box-shadow: 2px 4px 15px black;
            max-width: 100%;
            padding: 1em;
            border-radius: 37px;
            margin-top: 3em;
          }

          section h2 {
            font-family: 'Tajawal Bold';
            font-size: 2rem;
            margin: 0;
            padding: 0;
            text-align: left;
            letter-spacing: -1px;
            margin-left: 1em;
            margin-right: 1em;
          }

          section ul {
            margin: 0;
            padding: 0;
            text-align: left;
            margin-top: 1em;
            margin-left: 2em;
            margin-right: 2em;
          }

          small {
            font-size: 16px;
            font-weight: 500;
            display: inline-block;
          }
        `}
      </style>
    </section>
  );
}
