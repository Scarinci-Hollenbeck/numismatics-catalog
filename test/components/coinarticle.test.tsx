import React from 'react';
import renderer from 'react-test-renderer';
import CoinArticle from '../../components/CoinArticle';

const articles = [
  {
    node: {
      id: '123',
      title: 'Austria’s Named Best Gold Coin at 2020 COTY Awards',
      excerpt:
        'The Austrian Mint won the “Best Gold Coin” category at 2020 Coin of the Year (COTY) Awards for its 50 Euro honoring Alfred Adler. The winning coin, dated 2018, is part of a three-coin series that celebrates the pioneering schools of psychotherapy. The other coins in',
      featuredImage: {
        node: {
          sourceUrl:
            'https://donaldscarinci.com/wp-content/uploads/2020/01/Austria-Alfred-Alder-50-Euro-Gold.png',
        },
      },
      uri:
        'https://donaldscarinci.com/austrias-named-best-gold-coin-at-2020-coty-awards/',
    },
  },
  {
    node: {
      id: '456',
      title: 'Germany’s Named Best Gold Coin at 2021 COTY Awards',
      excerpt:
        'The Germany Mint won the “Best Gold Coin” category at 2021 Coin of the Year (COTY) Awards for its 50 Euro honoring Alfred Adler. The winning coin, dated 2018, is part of a three-coin series that celebrates the pioneering schools of psychotherapy. The other coins in',
      featuredImage: {
        node: {
          sourceUrl:
            'https://donaldscarinci.com/wp-content/uploads/2020/01/Austria-Alfred-Alder-50-Euro-Gold.png',
        },
      },
      uri:
        'https://donaldscarinci.com/germanys-named-best-gold-coin-at-2021-coty-awards/',
    },
  },
];

describe('Coin Article Component', () => {
  it('expect articles length == 2', () => {
    expect(articles.length).toBe(2);
  });

  it('The word "Coin" is found in the title', () => {
    const { title } = articles[0].node;
    expect(title).toMatch(/Coin/);
  });

  it('the coin article list contains sourceUrl and title', () => {
    expect(articles[1].node).toHaveProperty(
      'title',
      'Germany’s Named Best Gold Coin at 2021 COTY Awards',
    );
    expect(articles[1].node.featuredImage.node).toHaveProperty(
      'sourceUrl',
      'https://donaldscarinci.com/wp-content/uploads/2020/01/Austria-Alfred-Alder-50-Euro-Gold.png',
    );
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<CoinArticle article={articles[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
