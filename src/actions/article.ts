import { IArticle } from '../components/articles/Article'

export const articleActions = {
  ADD_ARTICLE: 'ADD_ARTICLE'
}

interface AAddArticle {
  type: typeof articleActions.ADD_ARTICLE,
  payload: IArticle
}

export type ArticleActions = AAddArticle
