import React, { createContext, useReducer } from 'react'

import { TaskActions } from '../actions/task'
import { reducer, initialState } from '../reducers/task'
import TaskState from '../resources/domain/state/TaskState'


export interface ITaskContext {
  tasks: TaskState
  dispatch: React.Dispatch<TaskActions>
}


export const TaskContext = createContext<ITaskContext>({
  tasks: initialState,
  dispatch: () => null
})

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, initialState)

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
