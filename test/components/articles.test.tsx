import React from 'react'
import renderer from 'react-test-renderer'
import CoinArticle from '../../components/CoinArticle'
import CoinArticleContainer from '../../components/CoinArticlesCointainer'

const articles = [
  {
    id: '123',
    title: 'Austria’s Named Best Gold Coin at 2020 COTY Awards',
    description:
      'The Austrian Mint won the “Best Gold Coin” category at 2020 Coin of the Year (COTY) Awards for its 50 Euro honoring Alfred Adler. The winning coin, dated 2018, is part of a three-coin series that celebrates the pioneering schools of psychotherapy. The other coins in',
    image:
      'https://donaldscarinci.com/wp-content/uploads/2020/01/Austria-Alfred-Alder-50-Euro-Gold.png',
    link:
      'https://donaldscarinci.com/austrias-named-best-gold-coin-at-2020-coty-awards/',
  },
  {
    id: '456',
    title: 'Austria’s Named Best Gold Coin at 2020 COTY Awards',
    description:
      'The Austrian Mint won the “Best Gold Coin” category at 2020 Coin of the Year (COTY) Awards for its 50 Euro honoring Alfred Adler. The winning coin, dated 2018, is part of a three-coin series that celebrates the pioneering schools of psychotherapy. The other coins in',
    image:
      'https://donaldscarinci.com/wp-content/uploads/2020/01/Austria-Alfred-Alder-50-Euro-Gold.png',
    link:
      'https://donaldscarinci.com/austrias-named-best-gold-coin-at-2020-coty-awards/',
  },
  {
    id: '789',
    title: 'Austria’s Named Best Gold Coin at 2020 COTY Awards',
    description:
      'The Austrian Mint won the “Best Gold Coin” category at 2020 Coin of the Year (COTY) Awards for its 50 Euro honoring Alfred Adler. The winning coin, dated 2018, is part of a three-coin series that celebrates the pioneering schools of psychotherapy. The other coins in',
    image:
      'https://donaldscarinci.com/wp-content/uploads/2020/01/Austria-Alfred-Alder-50-Euro-Gold.png',
    link:
      'https://donaldscarinci.com/austrias-named-best-gold-coin-at-2020-coty-awards/',
  },
  {
    id: '912',
    title: 'Austria’s Named Best Gold Coin at 2020 COTY Awards',
    description:
      'The Austrian Mint won the “Best Gold Coin” category at 2020 Coin of the Year (COTY) Awards for its 50 Euro honoring Alfred Adler. The winning coin, dated 2018, is part of a three-coin series that celebrates the pioneering schools of psychotherapy. The other coins in',
    image:
      'https://donaldscarinci.com/wp-content/uploads/2020/01/Austria-Alfred-Alder-50-Euro-Gold.png',
    link:
      'https://donaldscarinci.com/austrias-named-best-gold-coin-at-2020-coty-awards/',
  },
  {
    id: '913',
    title: 'Austria’s Named Best Gold Coin at 2020 COTY Awards',
    description:
      'The Austrian Mint won the “Best Gold Coin” category at 2020 Coin of the Year (COTY) Awards for its 50 Euro honoring Alfred Adler. The winning coin, dated 2018, is part of a three-coin series that celebrates the pioneering schools of psychotherapy. The other coins in',
    image:
      'https://donaldscarinci.com/wp-content/uploads/2020/01/Austria-Alfred-Alder-50-Euro-Gold.png',
    link:
      'https://donaldscarinci.com/austrias-named-best-gold-coin-at-2020-coty-awards/',
  },
]

describe('Articles Item component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<CoinArticle article={articles[0]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Articles Container component', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(<CoinArticleContainer articles={articles} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
