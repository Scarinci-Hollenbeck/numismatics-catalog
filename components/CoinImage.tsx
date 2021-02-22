import React from 'react';
import Image from 'next/image';
import { imageSourceFormatter } from '../utils/helpers';

type Props = {
  image: string
  title: string
  width: number
  height: number
  priority: boolean
}

const CoinImage = ({
  image, title, width, height, priority = false,
}: Props): JSX.Element => (
  <>
    <Image
      src={imageSourceFormatter(image)}
      alt={title}
      width={width}
      height={height}
      layout="intrinsic"
      priority={priority}
    />
  </>
);

export default CoinImage;
