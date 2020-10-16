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
          {' '}
          {collectionName}
          {' '}
          Coins
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
        box-shadow: 2px 4px 15px black;
        max-width: 100%;
        padding: 1em;
        border-radius:37px;
        text-align: center;
        margin-bottom: 3em;
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
        text-transform: capitalize;
      }

        section ul {
          margin: 0;
          padding: 0;
          text-align: left;
          margin-top: 1em;
          margin-left: 2em;
          margin-right: 2em;
        }

        section hr {
          margin-left: 1em;
          margin-right: 1em;
        }
      `}
        </style>
      </section>
    </>
  );
}
