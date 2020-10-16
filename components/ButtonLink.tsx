import React from 'react';
import Link from 'next/link';
import styles from '../styles/buttonLink.module.css';

type Props = {
  link: string
  caption: string
}

export default function Buttonlink({ link, caption }: Props) {
  return (
    <>
      <Link href={link}>
        <a type="button" className={styles.buttonlink}>
          {caption}
        </a>
      </Link>
    </>
  );
}
