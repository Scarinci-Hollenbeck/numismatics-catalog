import { create } from 'domain';
import React from 'react';
import { Article } from '../interfaces';
import ButtonLink from './ButtonLink';
import { createMarkup, formatDate } from '../utils/helpers';


type Props = {
  article: Article
}

export default function CoinArticle({ article }: Props): JSX.Element {

  return (
    <li>      
      <div>
        <h5>{article.node.title}</h5>
        <p><strong>Published: </strong>{formatDate(article.node.date)}</p>
        <div
          className="excerpt"
          dangerouslySetInnerHTML={createMarkup(article.node.excerpt)}
        />
        <ButtonLink
          link={`https://donaldscarinci.com${article.node.uri}`}
          caption="Full Article"
        />
      </div>
      <style jsx>
        {`
          li {
            font-family: 'Tajawal Regular';
            list-style-type: none;
            margin: 0;
            margin-bottom: 2em;
            padding: 0;
            text-align: left;
            padding-bottom: 2em;
            color: #fff;            
          }  

          .excerpt {
            margin-left: 0;
            margin-bottom: 2em;
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
              margin-right: 3em;
            }
          }
        `}
      </style>
    </li>
  );
}
