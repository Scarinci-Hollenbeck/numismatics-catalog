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
    </li>
  )
}
