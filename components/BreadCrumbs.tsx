import Link from 'next/link';
import { makeTitle } from '../utils/helpers';

export default function BreadCrumbs({ links }) {

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
  )
}