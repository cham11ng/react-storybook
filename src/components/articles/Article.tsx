import React from "react"

import "./Article.css"

export interface IArticle {
  id: number,
  title: string,
  body: string;
}

interface ArticleProps {
  article: IArticle
}

const Article: React.FC<ArticleProps> = ({ article }) => (
  <div className="article">
    <h1>{article.title}</h1>
    <p>{article.body}</p>
  </div>
)

export default Article
