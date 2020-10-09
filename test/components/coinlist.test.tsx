import React from 'react';
import renderer from 'react-test-renderer';
import CoinList from '../../components/CoinList';

const coins = [
  {
    "_id": "123",
    "title": "King Alfonso XII, 1874 - 1885",
    "link": "/coin/king-alfonso-xii-1874-1885"
  },
  {
    "_id": "456",
    "title": "King Alfonso XII, 1874 - 1885",
    "link": "/coin/king-alfonso-xii-1874-1885"
  }
];

const crumbs = [
  {
    link: "http://test.com/coin/5f6e4147ae97b21b48da848e/king-alfonso-xii%2C-1874---1885",
    title: 'Coin Item 1'
  },
  {
    link: "http://test.com/coin/5f6e4147ae97b21b48da848e/king-alfonso-xi%2C-1840---1874",
    title: 'Coin Item 2'
  }
]



describe('Coin List Component', () => {
  it('expect coins length == 2', () => {
    expect(coins.length).toBe(2);
  });

  it('The word "King" is found in the title', () => {
    const title = coins[0].title;
    expect(title).toMatch(/King/);
  });

  it('the coin article list contains link and title', () => {
    expect(coins[1]).toHaveProperty('title',  'King Alfonso XII, 1874 - 1885')
    expect(coins[1]).toHaveProperty('link', '/coin/king-alfonso-xii-1874-1885');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<CoinList collectionName="CollectionName" coinList={coins} breadCrumbLinks={crumbs} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
