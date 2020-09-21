import react from 'react';
import { CollectionLink } from '../interfaces';
import CollectionListItem from './CollectionListItem';

type Props = {
  collections: CollectionLink[]
}

export default function CollectionList({ collections }): JSX.Element {
  return (
    <section className="collections">
      <h2>List of coin collections</h2>
      <hr />
      <ul className="list">
        {collections.map((collection) => <CollectionListItem key={collection.id} collection={collection} />)}
      </ul>
    </section>
  )
}