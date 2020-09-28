import React from 'react';
import useSWR from 'swr';
import Carousel from 'react-multi-carousel';
import CoinSliderItem from './CoinSliderItem';
import { getFetcher } from '../utils/helpers';

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
      items: 2,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  console.log(slides);
  return (
    <section className="coin-slider">
      <h2>Newly added coins</h2>
      <hr />
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
        {slides.data.length > 0
          && slides.data.map((slide) => (
            <CoinSliderItem key={slide._id} slide={slide} />
          ))}
      </Carousel>

      <style jsx>
        {`
          .coin-slider {
            background-color: #fff;
            box-shadow: 2px 4px 20px #a9a9a9;
            max-width: 100%;
            padding: 1em;
          }

          .coin-slider h2 {
            font-family: 'Tajawal Regular';
            font-size: 3rem;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </section>
  );
}
