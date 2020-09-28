import React from 'react';
import CoinDetails from '../components/CoinDetails';
import CoinImage from '../components/CoinImage';

export default { title: 'Coin Profile' };

const breadCrumbLinks = [
  'Calico Kings and Queens of Spain',
  'King Ferdinand VI, 1746 - 1759',
];

const coinDetails = {
  id: '123456',
  title: 'King Ferdinand VI, 1746 - 1759',
  image: 'https://coincatalogds.nyc3.digitaloceanspaces.com/15-set.jpg',
  description:
    'Obv: Ferdin. VI D.G. Hisp. Et Ind. R. 1746-1759, Rev: Aeqvilibrivm Weight: 63.7864 Grams, 2.25 Ounces Measurements: .50 MM Diameter, 2 Inches In Diameter',
  link: 'king-ferdinand-vi-1746-1759',
};

export const Image = () => (
  <CoinImage image={coinDetails.image} title={coinDetails.title} />
);
export const Profile = () => (
  <CoinDetails coin={coinDetails} breadCrumbLinks={breadCrumbLinks} />
);
