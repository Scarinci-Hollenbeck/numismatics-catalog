import React from 'react'
import renderer from 'react-test-renderer'
import CollectionListItem from '../../components/CollectionListItem'
import CollectionList from '../../components/CollectionList'

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
]

describe('Collection list Item component', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(<CollectionListItem collection={collections[0]} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Collection list Container component', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(<CollectionList collections={collections} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
