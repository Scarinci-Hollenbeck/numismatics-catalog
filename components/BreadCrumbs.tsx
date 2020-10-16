import React from 'react';
import Link from 'next/link';
import { makeTitle } from '../utils/helpers';

export default function BreadCrumbs({ crumbs }): JSX.Element {
  return (
    <ul className="breadcrumbs">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {crumbs.map((crumb) => (
        <li key={crumb.link}>
          <Link href={crumb.link}>
            <a>{makeTitle(crumb.title)}</a>
          </Link>
        </li>
      ))}

      <style jsx>
        {`
          .breadcrumbs {
            font-family: 'Tajawal Bold';
            margin: 0;
            margin-bottom: 1em;
            padding: 0;
            text-align: left;
            margin-top: 2em;
          }

          .breadcrumbs li {
            display: inline;
            margin-right: 10px;
          }

          a {
            color: #FEAA0D;
          }
        `}
      </style>
    </ul>
  );
}
