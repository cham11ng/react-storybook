import React, { useContext } from "react"

import { ArticleContext } from '../contexts/ArticleContext'
import Article from '../components/articles/Article'

const Articles: React.FC = () => {
  const { articles } = useContext(ArticleContext)
  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}

export default Articles
