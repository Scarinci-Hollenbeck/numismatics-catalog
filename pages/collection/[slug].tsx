import React from 'react';

export default function Collection({ collectionName, collectionDetails }): JSX.Element  {
  return (
    <>
     Collection Page: {collectionName}
     <br />
     Collection Details: {JSON.stringify(collectionDetails)}
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