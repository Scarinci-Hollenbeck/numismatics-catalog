import React from 'react';
import renderer from 'react-test-renderer';
import CoinImage from '../../components/CoinImage';

const image = [
  {
    image: 'kw2osskjam04mvgiokef',
    title: 'Coin Item 1',
    width: 500,
    height: 250,
  },
];

describe('CoinImage Component', () => {
  it('expect image length == 1', () => {
    expect(image.length).toBe(1);
  });

  it('The word "Coin" is found in the title', () => {
    const { title } = image[0];
    expect(title).toMatch(/Coin/);
  });

  it('the coin image list contains title and image', () => {
    expect(image[0]).toHaveProperty('title', 'Coin Item 1');
    expect(image[0]).toHaveProperty('image', 'kw2osskjam04mvgiokef');
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <CoinImage
          image={image[0].image}
          title={image[0].title}
          height={image[0].height}
          width={image[0].image}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
