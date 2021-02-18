import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { UserAgent } from '../interfaces';
import { formatImageUrl } from '../utils/helpers';

type Props = {
  image: string
  title: string
  userAgent: UserAgent
};

const CoinImage = ({ image, title, userAgent }: Props): JSX.Element => (
  <>
    {userAgent.deviceType === 'desktop' && (
    <LazyLoadImage
      alt={title}
      height="auto"
      src={formatImageUrl(image, null, userAgent.os)}
      width="100%"
      effect="blur"
    />
    )}
    {userAgent.deviceType === 'tablet' && (
    <LazyLoadImage
      alt={title}
      height="auto"
      src={formatImageUrl(image, null, userAgent.os)}
      width="100%"
      effect="blur"
    />
    )}
    {userAgent.deviceType === 'mobile' && (
    <LazyLoadImage
      alt={title}
      height="auto"
      src={formatImageUrl(image, 'c_scale,w_464', userAgent.os)}
      width="100%"
      effect="blur"
    />
    )}
  </>
);

export default CoinImage;
