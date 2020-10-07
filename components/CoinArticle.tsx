import { create } from 'domain';
import React from 'react';
import { Article } from '../interfaces';
import { createMarkup } from '../utils/helpers';

type Props = {
  article: Article
}

export default function CoinArticle({ article }: Props): JSX.Element {

  return (
    <li className="article-item">
      <img src={article.node.featuredImage.node.sourceUrl} alt={article.node.title} />
      <div className="article-content">
        <h5>{article.node.title}</h5>
        <div dangerouslySetInnerHTML={createMarkup(article.node.excerpt)} />
        <a href={`https://donaldscarinci.com${article.node.uri}`} target="_blank" rel="noreferrer">
          Read Full Article &gt;&gt;
        </a>
      </div>
      <style jsx>
        {`
          .article-item {
            display: flex;
            flex-direction: column;
            font-family: 'Tajawal Regular';
            justify-content: flex-start;
            margin: 0;
            margin-bottom: 2em;
            padding: 0;
            text-align:left;
            padding-bottom: 2em;
            border-bottom: .5px solid #e9e9e9;
          }

          .article-item img {
            max-width: 400px;
          }

          .article-content {
            margin-left: 2em;
          }

          .article-content h5 {
            font-size: 1.7rem;
          }

          .article-content p,
          .article-content h5 {
            margin: 0;
            padding: 0;
          }

          .article-item a {
            color: #db2220;
            display: block;
            margin-top: 3em;
            text-decoration: none;
          }

          .article-item a:hover {
            text-decoration: underline;
          }

          @media (min-width: 1225px) {
            .article-item {
              flex-direction: row;
            }
          }
        `}
      </style>
    </li>
  );
}
