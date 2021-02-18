import React from 'react';
import Image from 'next/image';
import { imageSourceFormatter } from '../utils/helpers';

type Props = {
  image: string
  title: string
  width: number
  height: number
}

const CoinImage = ({
  image, title, width, height,
}: Props): JSX.Element => (
  <>
    <Image
      src={imageSourceFormatter(image)}
      alt={title}
      width={width}
      height={height}
      layout="intrinsic"
    />
  </>
);

export default CoinImage;
