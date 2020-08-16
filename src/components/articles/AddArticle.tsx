import React, { useState, useContext } from "react"
import "./AddArticle.css"

import { ArticleContext } from "../../contexts/ArticleContext"

const AddArticle: React.FC = () => {
  const { dispatch } = useContext(ArticleContext)
  const [article, setArticle] = useState<any>()

  const handleArticleData = (e: any) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value
    })
  }

  const addNewArticle = (e: any) => {
    e.preventDefault()
    dispatch({ type: "ADD_ARTICLE", payload: article })
  }

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      />
      <button>Add article</button>
    </form>
  )
}
export default AddArticle
