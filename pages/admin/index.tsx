import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import auth0 from '../../utils/auth0';
import dbConnect from '../../utils/db-connect';
import Coins, { ICoins } from '../../models/Coins';
import CollectionCoinCount, {
  ICollectionCoinCount,
} from '../../models/CollectionCoinCount';
import UploadImage from '../../components/UploadImage';
import CollectionList from '../../components/CollectionList';
import AdminCoinList from '../../components/AdminCoinList';

export default function Admin({
  authed,
  listOfCoins,
  listOfCollections,
}): JSX.Element {
  const datainCoinsOrCollections = listOfCoins.length > 0 && listOfCollections.length > 0;

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
          {listOfCoins && (
            <AdminCoinList collectionName="none" coinList={listOfCoins} />
          )}
        </div>
        <div>
          {listOfCollections && (
            <CollectionList authed={authed} collections={listOfCollections} />
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
    await dbConnect();
    const session = await auth0.getSession(req);

    // get all coins
    const listOfCoins: Array<ICoins> = await Coins.find();
    const listAllCollections: Array<ICollectionCoinCount> = await CollectionCoinCount.find(
      {},
    );

    const formattedCollections = listAllCollections.map((collection) => ({
      id: collection.categoryId,
      title: collection.categoryTitle,
      count: collection.count,
    }));

    // login constraints
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

    // login response
    return {
      props: {
        user: session.user,
        authed: true,
        listOfCoins: JSON.parse(JSON.stringify(listOfCoins)) || [],
        listOfCollections:
          JSON.parse(JSON.stringify(formattedCollections)) || [],
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
