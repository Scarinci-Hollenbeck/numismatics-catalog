import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import CoinListItem from './CoinListItem';
import { LinkItem, BreadCrumb } from '../interfaces';

type Props = {
  coinList: LinkItem[]
  collectionName: string
  breadCrumbLinks: BreadCrumb[]
}
export default function CoinList({
  collectionName,
  coinList,
  breadCrumbLinks,
}: Props): JSX.Element {
  return (
    <>
      <BreadCrumbs crumbs={breadCrumbLinks} />
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
            <CoinListItem key={coin._id} coin={coin} authed={false} />
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
    </>
  );
}
