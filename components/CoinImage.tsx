import React from 'react';

type Props = {
  image: string,
  title: string
};

const CoinImage = ({ image, title }: Props) : JSX. Element => <img src={image} alt={title} className="coin-image" />;

export default CoinImage;
