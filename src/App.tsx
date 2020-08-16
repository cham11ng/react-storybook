import React from 'react'

import Tasks from './containers/Tasks'
import { UIProvider } from './contexts/UIContext'

const App: React.FC = () => {
  return (
    <UIProvider>
      <Tasks />
    </UIProvider>
  )
}

export default App
