import React from 'react';

export default function Collection({ collectionName, listOfCoins }): JSX.Element  {
  return (
    <>
     Collection Page: {collectionName}
     <br />
     Collection Details: {JSON.stringify(listOfCoins)}
    </>
  )
}


export async function getServerSideProps({ params, res }){
  console.log(res.statusCode);
  return {
    props: {
      collectionName: params.slug || '',
      collectionDetails: {}
    }
  }
}