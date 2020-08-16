import { ArticleActions } from '../actions/article'

interface ArticleState {
  id: number,
  title: string,
  body: string;
}

export const initialState: ArticleState[] = []

export const reducer = (state: ArticleState[] = initialState, action: ArticleActions): ArticleState[] => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return [
        ...state,
        {
          id: Math.random(), // not really unique but it's just an example
          title: action.payload.title,
          body: action.payload.body
        }
      ]

    default:
      return state
  }
}
