import { Story } from '@storybook/react/types-6-0'
import React, { ReactElement, ReactNode } from 'react'

import TaskList from '../components/task/TaskList'
import { UIProvider } from '../contexts/UIContext'
import { TaskProvider } from '../contexts/TaskContext'
import { taskData, actionsData } from './Task.stories'

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [
    (story: () => ReactNode): ReactElement => (
      <UIProvider>
        <TaskProvider>
          <div style={{ padding: '3rem' }}>{story()}</div>
        </TaskProvider>
      </UIProvider>
    ),
  ],
  excludeStories: /.*Data$/,
}

export const defaultTasksData = [
  { ...taskData, id: '1', title: 'Task 1' },
  { ...taskData, id: '2', title: 'Task 2' },
  { ...taskData, id: '3', title: 'Task 3' },
  { ...taskData, id: '4', title: 'Task 4' },
  { ...taskData, id: '5', title: 'Task 5' },
  { ...taskData, id: '6', title: 'Task 6' },
]

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
]

// FIXME Later
export const Default: Story = () => <TaskList />

Default.parameters = {
  tasks: defaultTasksData,
  ...actionsData
}

export const WithPinnedTasks: Story = () => <TaskList />

WithPinnedTasks.parameters = {
  tasks: withPinnedTasksData,
  ...actionsData
}

export const Loading: Story = () => <TaskList />

Loading.parameters = {
  loading: true,
  tasks: [],
  ...actionsData
}

export const Empty: Story = () => <TaskList />

Empty.parameters = {
  tasks: [],
  ...actionsData
}


