import React from 'react';
import CoinSliderItem from '../components/CoinSliderItem';
import CoinSliderContainer from '../components/CoinSliderContainer';

export default { title: 'Coin Slider' };

const slide = {
  _id: '123456',
  title: 'King Ferdinand VI, 1746 - 1759',
  imageUrl:
    'http://res.cloudinary.com/numismatics-catalog/image/upload/v1602599450/coins/siyxilduycqknjx8uc54.jpg',
  link:
    'http://localhost:3000/coin/5f85ba1ab4c7a81430872126/king-ferdinand-vi%2C-1746---1759',
  category: 'Calico Kings & Queens of Spain',
  width: 500,
  height: 250,
  priority: false,
};

export const Container = () => <CoinSliderContainer />;
export const Item = () => <CoinSliderItem slide={slide} />;
