import React from 'react';
import renderer from 'react-test-renderer';
import BreadCrumbs from '../../components/BreadCrumbs';

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

describe('BreadCrumbs Component', () => {
  it('expect coins length == 2', () => {
    expect(crumbs.length).toBe(2);
  });

  it('The word "Coin" is found in the title', () => {
    const { title } = crumbs[0];
    expect(title).toMatch(/Coin/);
  });

  it('the coin article list contains sourceUrl and title', () => {
    expect(crumbs[1]).toHaveProperty('title', 'Coin Item 2');
    expect(crumbs[1]).toHaveProperty(
      'link',
      'http://test.com/coin/5f6e4147ae97b21b48da848e/king-alfonso-xi%2C-1840---1874',
    );
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<BreadCrumbs crumbs={crumbs} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
