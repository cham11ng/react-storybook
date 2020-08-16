import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react/types-6-0'

import Task from '../components/task/Task'
import TaskStatus from '../resources/enums/TaskStatus'

export default {
  component: Task,
  title: 'Task',
  excludeStories: /.*Data$/
}

interface ITaskData {
  id: number;
  title: string;
  state: string;
}

export const taskData: ITaskData = {
  id: 1,
  title: 'Foo Bar',
  state: TaskStatus.INBOX
}

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

export const Default: Story = () => <Task task={taskData} {...actionsData} />

export const Pinned: Story = () => <Task task={{ ...taskData, state: TaskStatus.PINNED }} {...actionsData} />

export const Archived: Story = () => (
  <Task task={{ ...taskData, state: TaskStatus.ARCHIVED }} {...actionsData} />
)
