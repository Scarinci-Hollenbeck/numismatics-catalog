import React from 'react'
import { useUserAgent } from 'next-useragent'
import UploadImage from '../components/UploadImage'

type Props = {
  deviceType: string
}
export default function Home({ deviceType }: Props): JSX.Element {
  return (
    <div id="numismatics-app">
      <h1>Numismatics Catalog</h1>
      <UploadImage />
    </div>
  )
}

export function getServerSideProps({ req }) {
  // get current device
  const ua = useUserAgent(req.headers['user-agent'])
  let deviceType

  if (ua.isDesktop) {
    deviceType = 'desktop'
  }

  if (ua.isMobile) {
    deviceType = 'mobile'
  }

  if (ua.isTablet) {
    deviceType = 'tablet'
  }

  // latest coins

  // get the list of collections

  return {
    props: {
      deviceType,
    },
  }
}
