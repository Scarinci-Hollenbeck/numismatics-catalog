import React from 'react';
import renderer from 'react-test-renderer';
import CoinDetails from '../../components/CoinDetails';

const coins = [
  {
    title: 'King Alfonso XII, 1874 - 1885',
    description:
      'Obv: Alfonso XII Por La G De Dios 1874-1885, Rev: El Pacificador Barcelona MCMLXII',
    category: 'Calico Kings and Queens of Spain',
    imageUrl:
      'http://res.cloudinary.com/numismatics-catalog/image/upload/v1601061183/coins/kw2osskjam04mvgiokef.jpg',
    categoryId: '5f6e4147ae97b21b48da848e',
    width: 500,
    height: 250,
  },
  {
    title: 'King Alfonso XII, 1874 - 1885',
    description:
      'Obv: Alfonso XII Por La G De Dios 1874-1885, Rev: El Pacificador Barcelona MCMLXII',
    category: 'Calico Kings and Queens of Spain',
    imageUrl:
      'http://res.cloudinary.com/numismatics-catalog/image/upload/v1601061183/coins/kw2osskjam04mvgiokef.jpg',
    categoryId: '5f6e4147ae97b21b48da848e',
    width: 500,
    height: 250,
  },
];

const crumbs = [
  {
    link:
      'http://test.com/coin/5f6e4147ae97b21b48da848e/king-alfonso-xii%2C-1874---1885',
    title: 'Coin Item 1',
  },
  {
    link:
      'http://test.com/coin/5f6e4147ae97b21b48da848e/king-alfonso-xi%2C-1840---1874',
    title: 'Coin Item 2',
  },
];

describe('Coin Detail Component', () => {
  it('expect coins length == 2', () => {
    expect(coins.length).toBe(2);
  });

  it('The word "King" is found in the title', () => {
    const { title } = coins[0];
    expect(title).toMatch(/King/);
  });

  it('the coin article list contains sourceUrl and title', () => {
    expect(coins[1]).toHaveProperty('title', 'King Alfonso XII, 1874 - 1885');
    expect(coins[1]).toHaveProperty(
      'imageUrl',
      'http://res.cloudinary.com/numismatics-catalog/image/upload/v1601061183/coins/kw2osskjam04mvgiokef.jpg',
    );
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(<CoinDetails coin={coins[0]} crumbs={crumbs} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
