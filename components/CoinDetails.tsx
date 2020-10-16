import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import CoinImage from './CoinImage';

export default function CoinDetails({ coin, crumbs }): JSX.Element {
  return (
    <>
      <BreadCrumbs crumbs={crumbs} />
      <section>
        <CoinImage image={coin.imageUrl} title={coin.title} />
        <h2>{coin.title}</h2>
        <p>{coin.description}</p>
      </section>

      <style jsx>
        {`
          section {     
            background-color: #fff;
            box-shadow: 2px 4px 15px black;
            max-width: 100%;
            padding: 1em;
            border-radius:37px;
            margin-bottom: 3em;
            font-family: 'Tajawal Regular';
            font-size: 1.3rem; 
            text-align: center;
          }

          p {
            margin-top: 0;
          }
        `}
      </style>
    </>
  );
}
