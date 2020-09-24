import React from 'react'
import CoinSliderItem from '../components/CoinSliderItem'
import CoinSliderContainer from '../components/CoinSliderContainer'
import '../styles/coin-slider-item.scss'
import '../styles/coin-slider.scss'

export default { title: 'Coin Slider' }

const slide = {
  id: '123456',
  title: 'King Ferdinand VI, 1746 - 1759',
  image: 'https://coincatalogds.nyc3.digitaloceanspaces.com/15-set.jpg',
  description:
    'Obv: Ferdin. VI D.G. Hisp. Et Ind. R. 1746-1759, Rev: Aeqvilibrivm Weight: 63.7864 Grams, 2.25 Ounces Measurements: .50 MM Diameter, 2 Inches In Diameter',
  link: 'king-ferdinand-vi-1746-1759',
}

const slides = [
  {
    id: '123456',
    title: 'King Ferdinand VI, 1746 - 1759',
    image: 'https://coincatalogds.nyc3.digitaloceanspaces.com/15-set.jpg',
    description:
      'Obv: Ferdin. VI D.G. Hisp. Et Ind. R. 1746-1759, Rev: Aeqvilibrivm Weight: 63.7864 Grams, 2.25 Ounces Measurements: .50 MM Diameter, 2 Inches In Diameter',
    link: 'king-ferdinand-vi-1746-1759',
  },
  {
    id: '123456',
    title: 'King Ferdinand VI, 1746 - 1759',
    image: 'https://coincatalogds.nyc3.digitaloceanspaces.com/15-set.jpg',
    description:
      'Obv: Ferdin. VI D.G. Hisp. Et Ind. R. 1746-1759, Rev: Aeqvilibrivm Weight: 63.7864 Grams, 2.25 Ounces Measurements: .50 MM Diameter, 2 Inches In Diameter',
    link: 'king-ferdinand-vi-1746-1759',
  },
  {
    id: '123456',
    title: 'King Ferdinand VI, 1746 - 1759',
    image: 'https://coincatalogds.nyc3.digitaloceanspaces.com/15-set.jpg',
    description:
      'Obv: Ferdin. VI D.G. Hisp. Et Ind. R. 1746-1759, Rev: Aeqvilibrivm Weight: 63.7864 Grams, 2.25 Ounces Measurements: .50 MM Diameter, 2 Inches In Diameter',
    link: 'king-ferdinand-vi-1746-1759',
  },
]

export const Container = () => (
  <CoinSliderContainer deviceType="mobile" slides={slides} />
)
export const Item = () => <CoinSliderItem slide={slide} />
