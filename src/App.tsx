import React from 'react'

import Articles from './containers/Articles'
import AddArticle from './components/articles/AddArticle'
import { ArticleProvider } from './contexts/ArticleContext'

const App: React.FC = () => {
  return (
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  )
}

export default App
