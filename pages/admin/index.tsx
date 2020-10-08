import React from 'react';
import Head from 'next/head';
import UploadImage from '../../components/UploadImage';

export default function Admin(): JSX.Element {
  return (
    <div>
      <UploadImage />
      2. Component Two: Spreadsheet Uploader 3. Component Three: List of current
      Collections with delete button and link to coin list
      <style jsx>{`
        div {
          margin-top: 2em;
        }
      
      `}</style>
    </div>
  );
}
