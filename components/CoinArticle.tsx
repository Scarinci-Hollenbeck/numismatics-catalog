import React from 'react'
import { Article } from '../interfaces'

type Props = {
  article: Article
}

export default function CoinArticle({ article }: Props): JSX.Element {
  return (
    <li className="article-item">
      <img src={article.image} alt={article.title} />
      <div className="article-content">
        <h5>{article.title}</h5>
        <p>{article.description}</p>
        <a href={article.link} target="_blank" rel="noreferrer">
          Read Full Article &gt;&gt;
        </a>
      </div>
      <style jsx>{`  
          .article-item {
            display: flex;
            flex-direction: column;
            font-family: 'Tajawal Regular';
            justify-content: flex-start;
            margin: 0;
            margin-bottom: 2em;
            padding: 0;
          }

          .article-content {
            margin-left: 2em;                    
          }

          .article-content h5 {
            font-size: 1.7rem;
          }

          .article-content p, .article-content h5 {
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
      `}</style>
    </li>
  )
}
