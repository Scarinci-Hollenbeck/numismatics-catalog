import React from 'react';
import CollectionList from '../components/CollectionList';
import CollectionListItem from '../components/CollectionListItem';

export default { title: 'Collections' };

const collections = [
  {
    id: '5f85b9f3b4c7a8143087211a',
    title: 'Calico Kings and Queens of Spain',
    link:
      'http://localhost:3000/collection/5f85b9f3b4c7a8143087211a/calico-kings-and-queens-of-spain',
    categoryId: '',
    count: 0,
  },
  {
    id: '5f85ba49b4c7a81430872131',
    title: 'Krause coin winners',
    link:
      'http://localhost:3000/collection/5f85ba49b4c7a81430872131/krause-coin-winners',
    categoryId: '',
    count: 0,
  },
];

export const Container = () => (
  <CollectionList collections={collections} authed={false} />
);
export const Item = () => (
  <CollectionListItem collection={collections[0]} authed={false} />
);
