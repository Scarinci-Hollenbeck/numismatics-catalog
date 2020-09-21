import React from 'react';
import CollectionList from '../components/CollectionList';
import CollectionListItem from '../components/CollectionListItem';
import '../styles/collection-item.scss';
import '../styles/collection.scss';

export default { title: 'Collections' }

const collection = {
  id: '1',
  title: 'Calico Kings and Queens of Spain',
  link: 'calico-kings-and-queens-of-spain'
};

const collections = [
  {
    id: '1',
    title: 'Calico Kings and Queens of Spain',
    link: 'calico-kings-and-queens-of-spain'
  },
  {
    id: '2',
    title: 'Calico Kings and Queens of Spain',
    link: 'calico-kings-and-queens-of-spain'
  },
  {
    id: '3',
    title: 'Calico Kings and Queens of Spain',
    link: 'calico-kings-and-queens-of-spain'
  }
];

export const Container = () => <CollectionList collections={collections} />
export const Item = () => <CollectionListItem collection={collection} /> 