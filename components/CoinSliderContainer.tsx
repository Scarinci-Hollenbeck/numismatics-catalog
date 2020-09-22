import React from 'react';
import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

import { Slide } from '../interfaces';
import CoinSliderItem from './CoinSliderItem';

type Props = {
  slides: Slide[],
  deviceType: string
}

export default function CoinSliderContainer({ slides, deviceType }: Props): JSX.Element {
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
        {(slides.length > 0) && slides.map((slide) => <CoinSliderItem key={slide.id} slide={slide} />)}
      </Carousel>
    </section>
  );
}
