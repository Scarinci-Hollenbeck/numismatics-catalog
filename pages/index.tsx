import React from 'react';
import { useUserAgent } from 'next-useragent';

type Props = {
  deviceType: string
}
export default function Home({ deviceType } : Props): JSX.Element  {
  console.log(deviceType);
  return (
    <div id="numismatics-app">
       <h1>Numismatics Catalog</h1>
       {deviceType}   
    </div>
  )
};

export function getServerSideProps({ req }) {
  const ua = useUserAgent(req.headers['user-agent'])
  let deviceType;

  if(ua.isDesktop) {
    deviceType = 'desktop'
  };

  if(ua.isMobile) {
    deviceType = 'mobile';
  }

  if(ua.isTablet) {
    deviceType = 'tablet';
  }

  console.log(deviceType);
  
  return {
    props: {
      deviceType
    }
  }
}