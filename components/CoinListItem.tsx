import React from 'react'
import Link from 'next/link'
import { LinkItem } from '../interfaces'

type Props = {
  coin: LinkItem
}

export default function CoinListItem({ coin }: Props): JSX.Element {
  return (
    <li className="coin-item">
      <Link
        href={`/coin/${encodeURIComponent(coin.id)}/${encodeURIComponent(
          coin.link
        )}`}
      >
        <a>{coin.title}</a>
      </Link>

      <style jsx>{
        `
        .coins {
          background-color: #fff;
          box-shadow: 2px 4px 20px #a9a9a9;
          max-width: 100%;
          padding: 1em;
        }
        
        .coins h2 {
          font-family: 'Tajawal Regular';
          font-size: 3rem;
          margin: 0;
        }
      
        .coins .list {
          margin: 0;
          padding: 0;
        }
        `
      }</style>
    </li>
  )
}
