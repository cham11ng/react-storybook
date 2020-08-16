import React from 'react'

import { TaskProvider } from '../contexts/TaskContext'
import TaskList from '../components/task/TaskList'
import AddTask from '../components/task/AddTask'

const Tasks: React.FC = () => {
  return (
    <TaskProvider>
      <TaskList />
      <AddTask />
    </TaskProvider>
  )
}

export default Tasks
