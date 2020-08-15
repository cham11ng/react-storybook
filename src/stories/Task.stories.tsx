import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from '../components/utilities/Task';
import { Story } from '@storybook/react/types-6-0';

export default {
  component: Task,
  title: 'Task',
  excludeStories: /.*Data$/
};

interface TaskData {
  id: string;
  title: string;
  state: string;
  updatedAt: Date;
}

export const taskData = {
  id: '1',
  title: 'Foo Bar',
  state: 'TASK_INBOX'
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

export const Default: Story = () => <Task task={taskData} {...actionsData} />;

export const Pinned: Story = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />;

export const Archived: Story = () => (
  <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);
