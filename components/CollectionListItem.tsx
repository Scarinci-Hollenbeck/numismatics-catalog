import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { LinkItem } from '../interfaces';
import { makeUrl } from '../utils/helpers';
import DeleteAdminsItem from './DeleteAdminsItem';

type Props = {
  collection: LinkItem,
  authed: boolean
}

export default function CollectionListItem({ collection, authed=false }: Props): JSX.Element {
  return (
    <li className="collection-item">      
      <Link
        href={`/collection/${encodeURIComponent(
          collection._id,
        )}/${encodeURIComponent(makeUrl(collection.title))}`}
      >
        <a>
          <FontAwesomeIcon icon={faLink} className="small-icon" />
          {collection.title}
        </a>
      </Link>
      {' '}
      {(authed) && <DeleteAdminsItem type="collection" deleteId={collection._id} />}
      <style jsx>
        {`
          li {
            font-family: 'Tajawal Regular';
            font-size: 1.3rem;
            list-style-type: none;
            margin-bottom: 1em;
          }          
        `}
      </style>
    </li>
  );
}
