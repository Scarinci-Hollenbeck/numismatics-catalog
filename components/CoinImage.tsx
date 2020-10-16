import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
  image: string
  title: string
};

const baseUrlLarge = 'https://res.cloudinary.com/numismatics-catalog/image/upload/v1602685196/';


const CoinImage = ({ image, title }: Props): JSX.Element => (
  <>
   <LazyLoadImage
      alt={title}
      height="auto"
      src={`${baseUrlLarge}${image}`}
      width="100%"
    />   

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
