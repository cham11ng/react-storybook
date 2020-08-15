import { Story } from '@storybook/react/types-6-0';
import React, { ReactElement, ReactNode } from "react";

import { taskData, actionsData } from "./Task.stories";
import TaskList from '../components/utilities/task/TaskList';

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [
    (story: () => ReactNode): ReactElement => (
      <div style={{ padding: "3rem" }}>{story()}</div>
    ),
  ],
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" },
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
];

export const Default: Story = () => (
  <TaskList tasks={defaultTasksData} {...actionsData} />
);

export const WithPinnedTasks: Story = () => (
  <TaskList tasks={withPinnedTasksData} {...actionsData} />
);

export const Loading: Story = () => (
  <TaskList loading tasks={[]} {...actionsData} />
);

export const Empty: Story = () => <TaskList tasks={[]} {...actionsData} />;
