import React from 'react';
import useSWR from 'swr';
import Carousel from 'react-multi-carousel';
import CoinSliderItem from './CoinSliderItem';
import { getFetcher } from '../utils/helpers';
import { Slide, UserAgent  } from '../interfaces';

type Props = {
  userAgent: UserAgent
}

export default function CoinSliderContainer({
 userAgent
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
      <h2>RECENTLY ADDED</h2>
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
          deviceType={userAgent.deviceType}
          containerClass="carousel-container"
        >
          {slides.data.map((slide: Slide) => (
            <CoinSliderItem key={slide._id} userAgent={userAgent} slide={slide} />
          ))}
        </Carousel>
      )}
      <style jsx>
        {`
          section {
            background-color: #fff;
            box-shadow: 2px 4px 15px black;
            max-width: 100%;
            padding: 1em;
            border-radius: 37px;
            text-align: center;
          }

          section h2 {
            font-family: 'Tajawal Bold';
            font-size: 2rem;
            margin: 0;
            padding: 0;
            text-align: left;
            letter-spacing: -1px;
            margin-left: 1em;
            margin-right: 1em;
          }
        `}
      </style>
    </section>
  );
}
