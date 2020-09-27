import React from 'react'
import Link from 'next/link'
import { Slide } from '../interfaces'

type Props = {
  slide: Slide
}

export default function CoinSliderItem({ slide }: Props): JSX.Element {
  return (
    <figure>
      <img src={slide.imageUrl} alt={slide.title} />
      <figcaption>
        <h3>{slide.title}</h3>
        <h5>
          <Link
            href={`/coin/${encodeURIComponent(slide._id)}/${encodeURIComponent(
              slide.link
            )}`}
          >
            <a>Details &gt;&gt;</a>
          </Link>
        </h5>
      </figcaption>

            <style jsx>{`
              figure {
                display: flex;
                flex-direction: column;
                font-family: 'Tajawal Regular';
                justify-content: flex-start;             
              }

              figure h3, figure h5, figure figcaption {
                margin: 0;
              }
            
              figure figcaption {
                margin-left: 1em;
              }
            
              figure h3 {
                font-size: 1.5rem;
              }
            
              figure h5 {
                font-size: 1rem;
              }
              
              @media (min-width: 1225px) {
                figure {
                  flex-direction: row;
                }
              }                    
            `}</style>
    </figure>
  )
}
