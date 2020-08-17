import { Story } from '@storybook/react/types-6-0'
import React, { ReactElement, ReactNode, useContext } from 'react'

import { taskData } from './Task.stories'
import { UIContext } from '../contexts/UIContext'
import TaskList from '../components/task/TaskList'
import { TaskContext } from '../contexts/TaskContext'
import TaskStatus from '../resources/enums/TaskStatus'

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [
    (story: () => ReactNode): ReactElement => (
      <div style={{ padding: '3rem' }}>{story()}</div>
    ),
  ],
  excludeStories: /.*Data$/,
}

export const defaultTasksData = [
  { ...taskData, id: 1, title: 'Task 1' },
  { ...taskData, id: 2, title: 'Task 2' },
  { ...taskData, id: 3, title: 'Task 3' },
  { ...taskData, id: 4, title: 'Task 4' },
  { ...taskData, id: 5, title: 'Task 5' },
  { ...taskData, id: 6, title: 'Task 6' },
]

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: 6, title: 'Task 6 (pinned)', state: TaskStatus.PINNED },
]

export const withPArchivedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: 5, title: 'Task 5 (archived)', state: TaskStatus.ARCHIVED },
]

export const Default: Story = () => {
  const { dispatch } = useContext(TaskContext)
  const { dispatchUI } = useContext(UIContext)

  return (
  <UIContext.Provider value={{ dispatchUI, ui: { isLoading: false } }}>
    <TaskContext.Provider value={{ tasks: defaultTasksData, dispatch}}>
      <TaskList />
    </TaskContext.Provider>
  </UIContext.Provider>
)}

export const WithPinnedTasks: Story = () => {
  const { dispatch } = useContext(TaskContext)
  const { dispatchUI } = useContext(UIContext)

  return (
  <UIContext.Provider value={{ dispatchUI, ui: { isLoading: false } }}>
    <TaskContext.Provider value={{ tasks: withPinnedTasksData, dispatch}}>
      <TaskList />
    </TaskContext.Provider>
  </UIContext.Provider>
)}

export const WithArchivedTasks: Story = () => {
  const { dispatch } = useContext(TaskContext)
  const { dispatchUI } = useContext(UIContext)

  return (
  <UIContext.Provider value={{ dispatchUI, ui: { isLoading: false } }}>
    <TaskContext.Provider value={{ tasks: withPArchivedTasksData, dispatch}}>
      <TaskList />
    </TaskContext.Provider>
  </UIContext.Provider>
)}

export const Loading: Story = () => {
  const { dispatch } = useContext(TaskContext)
  const { dispatchUI } = useContext(UIContext)

  return (
  <UIContext.Provider value={{ dispatchUI, ui: { isLoading: true } }}>
    <TaskContext.Provider value={{ tasks: [], dispatch}}>
      <TaskList />
    </TaskContext.Provider>
  </UIContext.Provider>
)}

export const Empty: Story = () => {
  const { dispatch } = useContext(TaskContext)
  const { dispatchUI } = useContext(UIContext)

  return (
  <UIContext.Provider value={{ dispatchUI, ui: { isLoading: false } }}>
    <TaskContext.Provider value={{ tasks: [], dispatch}}>
      <TaskList />
    </TaskContext.Provider>
  </UIContext.Provider>
)}


