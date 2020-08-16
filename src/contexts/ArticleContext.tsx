import React, { createContext, useReducer } from "react"

import { ArticleActions } from "../actions/article"
import { IArticle } from '../components/articles/Article'
import { reducer, initialState } from "../reducers/article"


export interface IArticleContext {
  articles: IArticle[]
  dispatch: React.Dispatch<ArticleActions>;
}


export const ArticleContext = createContext<IArticleContext>({
  articles: initialState,
  dispatch: () => null
})

export const ArticleProvider: React.FC = ({ children }) => {
  const [articles, dispatch] = useReducer(reducer, initialState)

  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  )
}
