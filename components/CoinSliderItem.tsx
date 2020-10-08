import React from 'react';
import Link from 'next/link';
import CoinImage from './CoinImage';
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
        <h5>
          <Link
            href={`/coin/${encodeURIComponent(slide._id)}/${encodeURIComponent(
              makeUrl(slide.title),
            )}`}
          >
            <a>Details &gt;&gt;</a>
          </Link>
        </h5>
      </figcaption>

      <style jsx>
        {`
          figure {
            font-family: 'Tajawal Regular';
            font-size: 1.3rem;
            display:flex;
            flex-direction:column;
          }

          figure h3,
          figure h5,
          figure figcaption {
            margin: 0;
          }

          figure figcaption {
            margin-left: 1em;
          }

          figure h3 {
            font-size: 2rem;
            margin-top: .5em;
          }

          figure h5 {
            font-size: 1rem;
          }
        `}
      </style>
    </figure>
  );
}
