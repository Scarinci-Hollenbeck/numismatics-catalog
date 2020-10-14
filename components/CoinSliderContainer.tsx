import React from 'react';
import useSWR from 'swr';
import Carousel from 'react-multi-carousel';
import CoinSliderItem from './CoinSliderItem';
import { getFetcher } from '../utils/helpers';
import { Slide } from '../interfaces';

type Props = {
  deviceType: string
}

export default function CoinSliderContainer({
  deviceType,
}: Props): JSX.Element {
  const { data: slides, error: slidesError } = useSWR(
    '/api/list-latest-coins',
    getFetcher,
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <section className="coin-slider">
      <h2>Newly added coins</h2>
      <hr />
      {slides !== undefined && slides.data.length > 0 && (
        <Carousel
          additionalTransfrom={0}
          arrows
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          deviceType={deviceType}
          containerClass="carousel-container"
        >
          {slides.data.map((slide: Slide) => (
            <CoinSliderItem key={slide._id} slide={slide} />
          ))}
        </Carousel>
      )}
      <style jsx>
        {`
          section {
            background-color: #fff;
            box-shadow: 2px 4px 20px #a9a9a9;
            max-width: 100%;
            padding: 1em;
          }

          section h2 {
            font-family: 'Tajawal Regular';
            font-size: 2rem;
            margin: 0;
            padding: 0;
            text-align: left;
            color: #e74c3c;
          }

          section hr {
            background-color: #e74c3c;
            border: 0;
            height: 5px;
            border-radius: 5px;
          }
        `}
      </style>
    </section>
  );
}
