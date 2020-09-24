import React from 'react'
import Link from 'next/link'
import { LinkItem } from '../interfaces'

type Props = {
  collection: LinkItem
}

export default function CollectionListItem({ collection }: Props): JSX.Element {
  return (
    <li className="collection-item">
      <Link
        href={`/collection/${encodeURIComponent(
          collection.id
        )}/${encodeURIComponent(collection.link)}`}
      >
        <a>{collection.title}</a>
      </Link>
    </li>
  )
}
