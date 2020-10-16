import React from 'react';
import Link from 'next/link';
import { LinkItem } from '../interfaces';
import { makeUrl } from '../utils/helpers';
import DeleteAdminsItem from './DeleteAdminsItem';

type Props = {
  collection: LinkItem
  authed: boolean
}

export default function CollectionListItem({
  collection,
  authed = false,
}: Props): JSX.Element {
  return (
    <li className="collection-item">
      <Link
        href={`/collection/${encodeURIComponent(
          collection.id,
        )}/${encodeURIComponent(makeUrl(collection.title))}`}
      >
        <a>
          <strong>{collection.title}</strong>
          Coin:
          {' '}
          {collection.count}
        </a>
      </Link>
      {' '}
      {authed && (
        <DeleteAdminsItem type="collection" deleteId={collection.id} />
      )}
      <style jsx>
        {`
          li {
            font-family: 'Tajawal Regular';
            font-size: 1.3rem;
            list-style-type: none;
            margin-bottom: 1em;
          }

          li a {
            color: #feaa0d;
          }

          li a strong {
            display: block;
            margin-bottom: -6px;
          }
        `}
      </style>
    </li>
  );
}
