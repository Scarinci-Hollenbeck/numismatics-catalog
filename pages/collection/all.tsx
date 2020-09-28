import React from 'react';
import CollectionList from '../../components/CollectionList';
import BreadCrumbs from '../../components/BreadCrumbs';

export default function AllCollections({ collections }) {
  const links = ['collections'];

  return (
    <>
      <BreadCrumbs links={links} />
      <CollectionList collections={collections} />
    </>
  );
}
