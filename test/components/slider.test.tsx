import React from 'react'
import renderer from 'react-test-renderer'
import CoinSliderItem from '../../components/CoinSliderItem'
import CoinSliderContainer from '../../components/CoinSliderContainer'

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

describe('Slider Item component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<CoinSliderItem slide={slides[0]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Slider Container component', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(<CoinSliderContainer deviceType="mobile" slides={slides} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
