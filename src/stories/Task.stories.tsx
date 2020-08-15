import React from 'react';
import { action } from '@storybook/addon-actions'

import { Task } from '../components/utilities/Task';

export default {
  component: Task,
  title: 'Task',
  excludeStories: /.*Data$/
}

interface TaskData {
  id: string;
  title: string;
  state: string;
  updatedAt: Date;
}

export const taskData: TaskData = {
  id: '1',
  title: 'Foo Bar',
  state: 'TASK_INBOX',
  updatedAt: new Date(2020, 0, 1, 9, 0)
}

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

export const Default = () => <Task task={{ ...taskData }} {...actionsData } />;

export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData } />;

export const Archived = () => (
  <Task task= {{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData } />
);
