import React from 'react';
import LazyLoad from 'react-lazyload';

type Props = {
  image: string
  title: string
}

const CoinImage = ({ image, title }: Props): JSX.Element => (
  <>
    <LazyLoad height={482}>
      <picture>
        <source srcSet={`http://res.cloudinary.com/numismatics-catalog/image/upload/v1602685196/${image}.webp`} type="image/webp" />
        <source srcSet={`http://res.cloudinary.com/numismatics-catalog/image/upload/v1602685196/${image}.jpg`} type="image/jpeg" /> 
        <img src={`http://res.cloudinary.com/numismatics-catalog/image/upload/v1602685196/${image}.jpg`} alt={title} />
      </picture>
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
