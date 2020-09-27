import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import CoinImage from './CoinImage'

export default function CoinDetails({ coin, breadCrumbLinks }): JSX.Element {
  return (
    <>
      <BreadCrumbs links={breadCrumbLinks} />
      <section className="coin-details">
        <CoinImage image={coin.image} title={coin.title} />
        <h3>{coin.title}</h3>
        <p>{coin.description}</p>
      </section>

      <style jsx>{`
        .coin-item {
          font-family: 'Tajawal Regular';
          font-size: 1.3rem;
          list-style-type: none;
          margin-bottom: 1em;       
        } 
        
        .coin-item a {
          color: #000;
          text-decoration: none;
        }
        
        .coin-item a:hover {
          color: #00f;
          text-decoration: underline;
        }
      
      `}</style>
    </>
  )
}
