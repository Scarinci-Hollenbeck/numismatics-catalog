import Link from 'next/link';
import { CollectionLink } from '../interfaces';

type Props = {
  collection: CollectionLink
}

export default function CollectionListItem({ collection }: Props): JSX.Element {
  return (
    <li className="collection-item">
      <Link href={`/collection/${encodeURIComponent(collection.id)}/${encodeURIComponent(collection.link)}`}>
      <a>
        {collection.title}
      </a>
    </Link>
    </li>
  )
}