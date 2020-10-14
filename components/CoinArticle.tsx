import { create } from 'domain';
import React from 'react';
import { Article } from '../interfaces';
import { createMarkup } from '../utils/helpers';

type Props = {
  article: Article
}

export default function CoinArticle({ article }: Props): JSX.Element {
  return (
    <li>
      <img
        src={article.node.featuredImage.node.sourceUrl}
        alt={article.node.title}
      />
      <div>
        <h5>{article.node.title}</h5>
        <div
          className="excerpt"
          dangerouslySetInnerHTML={createMarkup(article.node.excerpt)}
        />
        <a
          href={`https://donaldscarinci.com${article.node.uri}`}
          target="_blank"
          rel="noreferrer"
        >
          Read Full Article &gt;&gt;
        </a>
      </div>
      <style jsx>
        {`
          li {
            display: flex;
            flex-direction: column;
            font-family: 'Tajawal Regular';
            justify-content: flex-start;
            margin: 0;
            margin-bottom: 2em;
            padding: 0;
            text-align: left;
            padding-bottom: 2em;
            border-bottom: 0.5px solid #e9e9e9;
          }

          div {
            margin-left: 2em;
          }

          .excerpt {
            margin-left: 0;
          }

          h5 {
            font-size: 1.7rem;
          }

          p,
          h5 {
            margin: 0;
            padding: 0;
          }

          a {
            font-weight: bold;
            font-size: 1.2rem;
          }

          @media (min-width: 1225px) {
            li {
              flex-direction: row;
            }
          }
        `}
      </style>
    </li>
  );
}
