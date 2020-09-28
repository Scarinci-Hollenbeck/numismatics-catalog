import react from 'react';
import { LinkItem } from '../interfaces';
import CollectionListItem from './CollectionListItem';

type Props = {
  collections: LinkItem[]
}

export default function CollectionList({ collections }: Props): JSX.Element {
  return (
    <section className="collections">
      <h2>List of coin collections</h2>
      <hr />
      <ul className="list">
        {collections.map((collection) => (
          <CollectionListItem key={collection.id} collection={collection} />
        ))}
      </ul>
      <style jsx>
        {`
          section {
            background-color: #fff;
            box-shadow: 2px 4px 20px #a9a9a9;
            max-width: 100%;
            padding: 1em;
          }

          section h2 {
            font-family: 'Tajawal Regular';
            font-size: 3rem;
            margin: 0;
          }

          section ul {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </section>
  );
}
