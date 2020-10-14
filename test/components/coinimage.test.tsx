import React from 'react';
import renderer from 'react-test-renderer';
import CoinImage from '../../components/CoinImage';

const image = [
  {
    image:
      'http://res.cloudinary.com/numismatics-catalog/image/upload/v1601061183/coins/kw2osskjam04mvgiokef.jpg',
    title: 'Coin Item 1',
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
    expect(image[0]).toHaveProperty(
      'image',
      'http://res.cloudinary.com/numismatics-catalog/image/upload/v1601061183/coins/kw2osskjam04mvgiokef.jpg',
    );
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(<CoinImage image={image[0].image} title={image[0].title} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
