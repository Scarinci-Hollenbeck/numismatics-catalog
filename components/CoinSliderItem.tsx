import React from 'react';
import Link from 'next/link';
import CoinImage from './CoinImage';
import ButtonLink from './ButtonLink';
import { makeUrl } from '../utils/helpers';
import { Slide } from '../interfaces';

type Props = {
  slide: Slide
}

export default function CoinSliderItem({ slide }: Props): JSX.Element {
  return (
    <figure>
      <CoinImage image={slide.imageUrl} title={slide.title} />
      <figcaption>
        <h3>{slide.title}</h3>
        <p>{slide.category}</p>
        <ButtonLink
          link={`/coin/${encodeURIComponent(slide._id)}/${encodeURIComponent(
            makeUrl(slide.title),
          )}`}
          caption="Details"
        />
      </figcaption>

      <style jsx>
        {`
          figure {
            font-family: 'Tajawal Regular';
            font-size: 1.3rem;
            display: flex;
            flex-direction: column;
          }

          figure h3,
          figure h5,
          figure figcaption {
            margin: 0;
          }

          figure h3 {
            font-size: 1.5rem;
          }
        `}
      </style>
    </figure>
  );
}
