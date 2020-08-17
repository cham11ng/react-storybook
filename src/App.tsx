import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Tasks from './containers/Tasks'
import { UIProvider } from './contexts/UIContext'

const App: React.FC = () => {
  return (
    <UIProvider>
      <Router>
        <main>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/task">Task</a></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/task" component={Task} />
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </main>
      </Router>
    </UIProvider>
  )
}

const FakeText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
)


const Home = () => (
  <>
    <h1>Home</h1>
    <FakeText />
  </>
)

const Task = () => (
  <>
    <h1>Task</h1>
    <Tasks />
  </>
)

const PageNotFound = () => (
  <h1>404: page not found</h1>
)

export default App
