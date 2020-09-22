import React from 'react';
import CollectionList from '../components/CollectionList';
import CollectionListItem from '../components/CollectionListItem';
import AllCollections from '../pages/collection/all';
import '../styles/items.scss';
import '../styles/item-list.scss';
import '../styles/breadcrumbs.scss';

export default { title: 'Collections' };

const collection = {
  id: '1',
  title: 'Calico Kings and Queens of Spain',
  link: 'calico-kings-and-queens-of-spain',
};

const collections = [
  {
    id: '1',
    title: 'Calico Kings and Queens of Spain',
    link: 'calico-kings-and-queens-of-spain',
  },
  {
    id: '2',
    title: 'Calico Kings and Queens of Spain',
    link: 'calico-kings-and-queens-of-spain',
  },
  {
    id: '3',
    title: 'Calico Kings and Queens of Spain',
    link: 'calico-kings-and-queens-of-spain',
  },
];

export const Container = () => <CollectionList collections={collections} />;
export const Item = () => <CollectionListItem collection={collection} />;
export const All = () => <AllCollections collections={collections} />;
