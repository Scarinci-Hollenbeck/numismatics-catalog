import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import CoinImage from './CoinImage';

export default function CoinDetails({ coin, breadCrumbLinks }) : JSX.Element {
  return (
    <>
      <BreadCrumbs links={breadCrumbLinks} />
      <section className="coin-details">
        <CoinImage image={coin.image} title={coin.title} />
        <h3>{coin.title}</h3>
        <p>{coin.description}</p>
      </section>
    </>
  );
}
