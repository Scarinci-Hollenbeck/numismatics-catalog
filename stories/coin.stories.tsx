import React from 'react';
import CoinDetails from '../components/CoinDetails';
import CoinImage from '../components/CoinImage';

export default { title: 'Coin Profile' };

const breadCrumbLinks = [
  {
    link: 'https://numismatics-catalog.donaldscarinci.com/collection/5f89901fb243284938118a88/calico-kings-and-queens-of-spain',
    title: 'Calico Kings and Queens of Spain'
  },
  {
    link: 'https://numismatics-catalog.donaldscarinci.com/collection/5f89906cb243284938118aa0/krause-coin-winners',
    title: 'King Ferdinand VI, 1746 - 1759'
  }
];

const coinDetails = {
  id: '123456',
  title: 'United States, 50 Cent Silver KM#208',
  imageUrl: 'coins/cvtq3txb4cqx7h6oikrj',
  description: 'Obv: George Washington on horseback facing, Rev: Mount Vernon Obv.Designer: Elizabeth Jones, Rev. Designer: Matthew Peloso',
  link: '/coin/5f8990bcb243284938118ac2/united-states%2C-50-cent-silver-km%23208',
};

const userAgent = {
  deviceType: 'desktop',
  os: 'iOS'
}

export const Image = () => (
  <CoinImage userAgent={userAgent} image={coinDetails.imageUrl} title={coinDetails.title} />
);
export const Profile = () => (
  <CoinDetails userAgent={userAgent} coin={coinDetails} crumbs={breadCrumbLinks} />
);
