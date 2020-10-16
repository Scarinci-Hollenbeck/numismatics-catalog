import React from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';
import CoinArticle from './CoinArticle';
import { Article } from '../interfaces';

const API = 'https://donaldscarinci.com/graphql';
const fetcher = (query: string) => request(API, query);

export default function CollectionArticlesContainer(): JSX.Element {
  const { data: coinArticles, error } = useSWR(
    `
    {category(id: 36, idType: DATABASE_ID) {
        name
        posts {
          edges {
            node {
              title
              uri
              excerpt(format: RENDERED)
              date
            }
          }
        }
      }
    }`,
    fetcher,
  );

  return (
    <section className="coin-articles">
      <h2>More On Numismatics</h2>
      <hr />
      {coinArticles !== undefined
        && coinArticles.category.posts.edges.length > 0 && (
          <ul>
            {coinArticles.category.posts.edges.map((article: Article) => (
              <CoinArticle key={article.node.title} article={article} />
            ))}
          </ul>
      )}
      <style jsx>
        {`
          section {
            margin-top: 3em;
          }

          section h2 {
            font-family: 'Tajawal Bold';
            font-size: 2rem;
            margin: 0;
            padding: 0;
            text-align: left;
            letter-spacing: -1px;
            color: white;
          }

          ul {
            margin: 0;
            padding: 0;
            margin-top: 2em;
            display: grid;
            grid-template-columns: 100%;
          }

          @media (min-width: 1225px) {
            ul {
              grid-template-columns: 50% 50%;
            }
            h2 {
              margin-left: 1em;
              margin-right: 1em;
            }
          }
        `}
      </style>
    </section>
  );
}
