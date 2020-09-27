import React from 'react'
import CoinLisItem from '../components/CoinListItem'
import CoinList from '../components/CoinList'


export default { title: 'Coin List' }

const collectionName = 'Calico Kings and Queens of Spain'

const breadCrumbLinks = [
  'Calico Kings and Queens of Spain',
  'King Ferdinand VI, 1746 - 1759',
]

const coinList = [
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

export const Item = () => <CoinLisItem coin={coinList[0]} />
export const All = () => (
  <CoinList
    collectionName={collectionName}
    coinList={coinList}
    breadCrumbLinks={breadCrumbLinks}
  />
)
