import React from 'react';
import renderer from 'react-test-renderer';
import CoinListItem from '../../components/CoinListItem';

const coins = [
  {
    _id: '123',
    title: 'King Alfonso XII, 1874 - 1885',
    link: '/coin/abcdefghijk/king-alfonso-xii-1874-1885',
    imageUrl: 'https://coincatalogds.nyc3.digitaloceanspaces.com/20-set.jpg',
    width: 500,
    height: 250,
  },
];

describe('Coin List Component', () => {
  it('expect coins length == 1', () => {
    expect(coins.length).toBe(1);
  });

  it('The word "King" is found in the title', () => {
    const { title } = coins[0];
    expect(title).toMatch(/King/);
  });

  it('the coin article list contains link and title', () => {
    expect(coins[0]).toHaveProperty('title', 'King Alfonso XII, 1874 - 1885');
    expect(coins[0]).toHaveProperty(
      'link',
      '/coin/abcdefghijk/king-alfonso-xii-1874-1885',
    );
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<CoinListItem coin={coins[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
