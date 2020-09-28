import React from 'react';
import Link from 'next/link';
import { LinkItem } from '../interfaces';

type Props = {
  collection: LinkItem
}

export default function CollectionListItem({ collection }: Props): JSX.Element {
  return (
    <li className="collection-item">
      <Link
        href={`/collection/${encodeURIComponent(
          collection.id,
        )}/${encodeURIComponent(collection.link)}`}
      >
        <a>{collection.title}</a>
      </Link>
      <style jsx>
        {`
          li {
            font-family: 'Tajawal Regular';
            font-size: 1.3rem;
            list-style-type: none;
            margin-bottom: 1em;
          }

          li a {
            color: #000;
            text-decoration: none;
          }

          li a:hover {
            color: #00f;
            text-decoration: underline;
          }
        `}
      </style>
    </li>
  );
}
