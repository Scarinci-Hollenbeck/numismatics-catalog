import React from 'react';
import LazyLoad from 'react-lazyload';

type Props = {
  image: string
  title: string
}

const CoinImage = ({ image, title }: Props): JSX.Element => (
  <>
    <LazyLoad height={482}>
      <img src={image} alt={title} />
    </LazyLoad>
    
    <style jsx>
      {`
        img {
          max-width: 100%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      `}
    </style>
  </>
);

export default CoinImage;
