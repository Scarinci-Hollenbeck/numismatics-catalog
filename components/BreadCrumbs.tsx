import React from 'react';
import Link from 'next/link';
import { makeTitle } from '../utils/helpers';

type Props = {
  links: Array<string>
}

export default function BreadCrumbs({ links } : Props): JSX.Element {
  return (
    <ul className="breadcrumbs">
      <li>
        <Link href="/">
          <a>
            Home
          </a>
        </Link>
      </li>
      {links.map((link) => (
        <li key={link}>
          <Link href={link}>
            <a>
              {makeTitle(link)}
            </a>
          </Link>
        </li>
      ))}

    </ul>
  );
}
