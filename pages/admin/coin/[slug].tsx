import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import auth0 from '../../../utils/auth0';
import { getFetcher } from '../../../utils/helpers';
import UploadImage from '../../../components/UploadImage';
import CollectionList from '../../../components/CollectionList';
import AdminCoinList from '../../../components/AdminCoinList';

type Props = {
  authed: boolean,
  collectionName: string
};

export default function AdminCoin({ authed, collectionName }: Props): JSX.Element {
  const { data: listOfCollections, error: collectionsError } = useSWR(
    '/api/list-all-collections',
    getFetcher,
  );

  return (
    <div>
      <Link href="/api/logout">
        <a>
          Log out
        </a>
      </Link>
      <UploadImage />
      <div className="options">
        <div>
          <AdminCoinList collection={collectionName} categoryId={} />
        </div>
        <div>
          {(listOfCollections !== undefined && listOfCollections.data.length > 0) && <CollectionList authed={authed} collections={listOfCollections.data} />}
        </div>
      </div>
      <style jsx>{`
        div {
          font-family: 'Tajawal Regular';
        }
        a {
          font-size: 1.3rem;
          margin-bottom: 20px;
          margin-top: 20px;
          display: block;
          font-weight: bold;
        }

        .options {
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          max-width: 1000px;
        }

        .options div {
          width: 100%;
        }



        @media (min-width: 1225px) {
          .options {
            flex-direction: row;
            justify-content:space-between;
          }
          .options div {
            width: 48%;
          }
        }
      
      `}</style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res, params } = context;

  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/login'
      });
      res.end();

      return {
        props: {
          user: '',
          authed: false
        } 
      }
    }
    return { 
      props: {
        user: session.user,
        authed: true,
        collectionName: params.slug[params.slug.length -1]
      }
     };
  }

  return {
    props: {
      user: '',
      authed: false
    }
  }
}