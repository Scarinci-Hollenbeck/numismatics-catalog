import React from 'react';

type Props = {
  image: string
  title: string
}

const CoinImage = ({ image, title }: Props): JSX.Element => (
  <>
    <img src={image} alt={title} />
    <style jsx>{`
      img {
        max-width: 500px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    `}
    </style>
  </>
);

export default CoinImage;
