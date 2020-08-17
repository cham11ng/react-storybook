import { Story } from '@storybook/react/types-6-0'
import React, { ReactElement, ReactNode, useContext } from 'react'

import { taskData } from './Task.stories'
import { UIContext } from '../contexts/UIContext'
import TaskList from '../components/task/TaskList'
import { TaskContext } from '../contexts/TaskContext'
import TaskStatus from '../resources/enums/TaskStatus'
import UIState from '../resources/domain/state/UIState'
import TaskState from '../resources/domain/state/TaskState'

interface TemplateProps {
  ui: UIState,
  tasks: TaskState
}

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
  { ...taskData, id: 1, title: 'Install CRA' },
  { ...taskData, id: 2, title: 'Install React via CRA' },
  { ...taskData, id: 3, title: 'Install Storybook' },
  { ...taskData, id: 4, title: 'Setup ESLint' },
  { ...taskData, id: 5, title: 'Implement React Context API' },
  { ...taskData, id: 6, title: 'Install React Router' },
]

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: 6, title: 'Install React Router (pinned)', state: TaskStatus.PINNED },
]

export const withPArchivedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: 6, title: 'Install React Router (archived)', state: TaskStatus.ARCHIVED },
]

const Template: Story<TemplateProps> = ({ ui, tasks }: TemplateProps) => {
  const { dispatch } = useContext(TaskContext)
  const { dispatchUI } = useContext(UIContext)

  return (
    <UIContext.Provider value={{ dispatchUI, ui }}>
      <TaskContext.Provider value={{ dispatch, tasks }}>
        <TaskList />
      </TaskContext.Provider>
    </UIContext.Provider>
  )
}

export const Default: Story<TemplateProps> = Template.bind({})
Default.args = {
  ui: { isLoading: false },
  tasks: defaultTasksData
}

export const WithPinnedTasks: Story<TemplateProps> = Template.bind({})
WithPinnedTasks.args = {
  ui: { isLoading: false },
  tasks: withPinnedTasksData
}

export const WithArchivedTasks: Story<TemplateProps> = Template.bind({})
WithArchivedTasks.args = {
  ui: { isLoading: false },
  tasks: withPArchivedTasksData
}

export const Loading: Story<TemplateProps> = Template.bind({})
Loading.args = {
  ui: { isLoading: true },
  tasks: []
}

export const Empty: Story<TemplateProps> = Template.bind({})
Empty.args = {
  ui: { isLoading: false },
  tasks: []
}



