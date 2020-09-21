import Link from 'next/link';
import CoinArticle from './CoinArticle';
import { Article } from '../interfaces';

type Props = {
  articles: Article[]
}

export default function CollectionArticlesContainer({ articles }: Props): JSX.Element {
  return (
    <section className="coin-articles">
      <h2>More On Numismatics</h2>
      <hr />
      <ul>
        {(articles.length > 0) && articles.map((article) => <CoinArticle key={article.id} article={article} />)}
      </ul>
    </section>
  )
}