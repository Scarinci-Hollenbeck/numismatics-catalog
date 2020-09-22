import React from 'react';
import Link from 'next/link';
import { LinkItem } from '../interfaces';

type Props = {
  coin: LinkItem
}

export default function CoinListItem({ coin }: Props): JSX.Element {
  return (
    <li className="coin-item">
      <Link href={`/coin/${encodeURIComponent(coin.id)}/${encodeURIComponent(coin.link)}`}>
        <a>
          {coin.title}
        </a>
      </Link>
    </li>
  );
}
