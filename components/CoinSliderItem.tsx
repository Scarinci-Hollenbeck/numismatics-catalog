import React from 'react';
import Link from 'next/link';
import { Slide } from '../interfaces';

type Props = {
  slide: Slide
}

export default function CoinSliderItem({ slide } : Props): JSX.Element {
  return (
    <figure className="slide-item">
      <img src={slide.image} alt={slide.title} />
      <figcaption>
        <h3>{slide.title}</h3>
        <h5>
          <Link href={`/coin/${encodeURIComponent(slide.id)}/${encodeURIComponent(slide.link)}`}>
            <a>
              Details &gt;&gt;
            </a>
          </Link>
        </h5>
      </figcaption>
    </figure>
  );
}
