import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import CoinListItem from './CoinListItem';
import { LinkItem } from '../interfaces';

type Props = {
  coinList: LinkItem[]
  collectionName: string
  breadCrumbLinks: Array<string>
}
export default function AllCoins({
  collectionName,
  coinList,
  breadCrumbLinks,
}: Props): JSX.Element {
  return (
    <>
      <BreadCrumbs links={breadCrumbLinks} />
      <section className="coins">
        <h2>
          List of
          {collectionName}
          {' '}
          coins
        </h2>
        <hr />
        <ul className="list">
          {coinList.map((coin) => (
            <CoinListItem key={coin.id} coin={coin} />
          ))}
        </ul>
      </section>
    </>
  );
}
