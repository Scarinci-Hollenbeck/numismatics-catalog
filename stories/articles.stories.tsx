import React from 'react';
import CoinArticle from '../components/CoinArticle';
import CoinArticlesCointainer from '../components/CoinArticlesCointainer';

export default { title: 'Coin Articles' };

const article = {
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
};
export const Container = () => <CoinArticlesCointainer />;
export const Item = () => <CoinArticle article={article} />;
