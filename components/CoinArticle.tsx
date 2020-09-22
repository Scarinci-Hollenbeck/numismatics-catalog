import React from 'react';
import Link from 'next/link';
import CoinArticle from './CoinArticle';
import { Article } from '../interfaces';

type Props = {
  article: Article
}

export default function CollectionArticlesContainer({ article }: Props): JSX.Element {
  return (
    <li className="article-item">
      <img src={article.image} alt={article.title} />
      <div className="article-content">
        <h5>{article.title}</h5>
        <p>{article.description}</p>
        <a href={article.link} target="_blank" rel="noopener">
          Read Full Article &gt;&gt;
        </a>
      </div>
    </li>
  );
}
