import React from 'react'
import CoinArticle from './CoinArticle'
import { Article } from '../interfaces'

type Props = {
  articles: Article[]
}

export default function CollectionArticlesContainer({
  articles,
}: Props): JSX.Element {
  // use next swr to fetch articles from donaldscarinci.com

  return (
    <section className="coin-articles">
      <h2>More On Numismatics</h2>
      <hr />
      <ul>
        {articles.length > 0 &&
          articles.map((article) => (
            <CoinArticle key={article.id} article={article} />
          ))}
      </ul>
        <style jsx>{`
          .coin-articles {
            background-color: #fff;
            box-shadow: 2px 4px 20px #a9a9a9;          
            max-height: 600px;
            max-width: 100%;
            overflow-y: auto;
            padding: 1em;     
          }

          .coin-articles h2 {
            font-family: 'Tajawal Regular';
            font-size: 3rem;
            margin: 0;
            padding: 0;
          }
        `}</style>
    </section>
  )
}
