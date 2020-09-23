import React from 'react';
import Papa from 'papaparse';

export default function UploadSpreadsheet(): JSX.Element {
  function onChange(event) {
    const { files } = event.target;

    Papa.parse(files[0], {
      worker: true,
      header: true,
      skipEmptyLines:true,
      quoteChar: '"',
      escapeChar: '"',
      delimiter: ",",
      quotes: true,
      step: (results) => {
       const res = results.data;
       console.table(res);
      }
    });
  }

  return (
    <section className="coin-data-upload">
      <p>
        <em>
          Upload the spreadsheet with the coin data below. Here is a link to an
          {' '}
          <a href="https://coincataloguploadtemplate.nyc3.digitaloceanspaces.com/CoinCataglogSample.csv" download>example spreadsheet</a>
          {' '}
          (Make sure it is a CSV file)
        </em>
      </p>
      <form onChange={onChange}>
        <input type="file" accept=".csv" />
      </form>
    </section>
  )
}