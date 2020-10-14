import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import auth0 from '../../utils/auth0';
import { getFetcher } from '../../utils/helpers';
import UploadImage from '../../components/UploadImage';
import CollectionList from '../../components/CollectionList';
import AdminCoinList from '../../components/AdminCoinList';

export default function Admin({ authed }): JSX.Element {
  // get a list of all the collections
  const { data: listOfCollections, error: collectionsError } = useSWR(
    '/api/list-all-collections',
    getFetcher,
  );

  // get a list of all the coins
  const { data: listOfCoins, error: coinsError } = useSWR(
    '/api/list-all-coins',
    getFetcher,
  );

  const datainCoinsOrCollections = listOfCollections !== undefined && listOfCoins !== undefined
    ? listOfCollections.data.length === 0 && listOfCoins.data.length === 0
    : false;

  return (
    <div>
      <Link href="/api/logout">
        <a>Log out</a>
      </Link>
      <UploadImage />
      {datainCoinsOrCollections && (
        <div className="no-content-container">
          <h2>There are no coins or collections in this catalog</h2>
        </div>
      )}
      <div className="options">
        <div>
          {listOfCoins !== undefined && listOfCoins.data.length > 0 && (
            <AdminCoinList collectionName="none" coinList={listOfCoins.data} />
          )}
        </div>
        <div>
          {listOfCollections !== undefined
            && listOfCollections.data.length > 0 && (
              <CollectionList
                authed={authed}
                collections={listOfCollections.data}
              />
          )}
        </div>
      </div>
      <style jsx>
        {`
        div {
          font-family: 'Tajawal Regular';
        }

        a {
          display: block;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
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

        .no-content-container {
          margin-left: auto;
          margin-right: auto;
          display: block;
          max-width: 1000px;
          text-align: center;
        }

        @media (min-width: 1225px) {
          .options {
            flex-direction: row;
            justify-content: space-between;
          }
          .options div {
            width: 48%;
          }
        }
      `}
      </style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;

  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/login',
      });
      res.end();

      return {
        props: {
          user: '',
          authed: false,
        },
      };
    }
    return {
      props: {
        user: session.user,
        authed: true,
      },
    };
  }

  return {
    props: {
      user: '',
      authed: false,
    },
  };
};
