import react from 'react';
import { LinkItem } from '../interfaces';
import CollectionListItem from './CollectionListItem';

type Props = {
  collections: LinkItem[]
  authed: boolean
}

export default function CollectionList({
  collections,
  authed = false,
}: Props): JSX.Element {
  return (
    <section className="collections">
      <h2>
        List of coin collections
        {authed && (
          <small>
            {' '}
            Mind you if you delete all collection all the associated coins will
            be deleted as well.
          </small>
        )}
      </h2>
      <hr />
      <ul className="list">
        {collections.map((collection) => (
          <CollectionListItem
            key={collection._id}
            collection={collection}
            authed={authed}
          />
        ))}
      </ul>
      <style jsx>
        {`
          section {
            background-color: #fff;
            box-shadow: 2px 4px 20px #a9a9a9;
            max-width: 100%;
            padding: 1em;
            margin-top: 3em;
          }

          section h2 {
            font-family: 'Tajawal Regular';
            font-size: 2rem;
            margin: 0;
            padding: 0;
            text-align: left;
            color: #2980b9;
          }

          section hr {
            background-color: #2980b9;
            border: 0;
            height: 5px;
            border-radius: 5px;
          }

          section ul {
            margin: 0;
            padding: 0;
            text-align: left;
            margin-top: 1em;
          }

          small {
            font-size: 16px;
            font-weight: 500;
            display: inline-block;
          }
        `}
      </style>
    </section>
  );
}
