import React from 'react';

export default function AdminCoinList({collection}) {
  // if collection get the coins based on that collection

  // if no collection get all the coins

  return (
    <section className="admin-coin-list">
      <h2>List of coins
      {(collection !== 'none') && <> in {collection} </>}
      </h2>
      <hr />
      <ul className="list">
        <li>Coins will go here..</li>
      </ul>
      <style jsx>
        {`
          section {
            background-color: #fff;
            box-shadow: 2px 4px 20px #a9a9a9;
            max-width: 100%;
            padding: 1em;
            margin-top: 3em;
            margin-right: 3em;
          }

          section h2 {
            font-family: 'Tajawal Regular';
            font-size: 2rem;
            margin: 0;
            padding: 0;
            text-align: left;
          }

          section ul {
            margin: 0;
            padding: 0;
            text-align: left;
            margin-top: 1em;
          }
        `}
      </style>
    </section>
  )
}