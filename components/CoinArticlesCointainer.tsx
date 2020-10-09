import React from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';
import CoinArticle from './CoinArticle';
import { Article } from '../interfaces';

const API = 'https://donaldscarinci.com/graphql';
const fetcher = (query:string) => request(API, query);

export default function CollectionArticlesContainer(): JSX.Element {

  const { data:coinArticles, error } = useSWR(`
    {category(id: 36, idType: DATABASE_ID) {
          name
          posts {
            edges {
              node {
                id
                title
                featuredImage {
                  node {
                    sourceUrl(size: LARGE)
                  }
                }
                uri
                excerpt(format: RENDERED)
              }
            }
          }
        }
      }`,
      fetcher
    );
    
  return (
    <section className="coin-articles">
      <h2>More On Numismatics</h2>
      <hr />
      {(coinArticles !== undefined && coinArticles.category.posts.edges.length > 0) && (
        <ul>
        {coinArticles.category.posts.edges.map((article: Article) =>  <CoinArticle key={article.node.id} article={article} />)}
      </ul>
      )}
      <style jsx>
        {`
          section {
            background-color: #fff;
            box-shadow: 2px 4px 20px #a9a9a9;
            max-height: 600px;
            max-width: 100%;
            overflow-y: auto;
            padding: 1em;
            margin-top: 3em;
          }

          section h2 {
            font-family: 'Tajawal Regular';
            font-size: 2rem;
            margin: 0;
            padding: 0;
            text-align: left;
            color: #20BAA5;
          }

          section hr {
            background-color: #20BAA5;
            border: 0;
            height: 5px;
            border-radius: 5px;
          }
        `}
      </style>
    </section>
  );
}
