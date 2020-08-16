import React, { useContext } from 'react'

import Task from './Task'
import { changeStatus } from '../../actions/task'
import { UIContext } from '../../contexts/UIContext'
import { TaskContext } from '../../contexts/TaskContext'
import TaskStatus from '../../resources/enums/TaskStatus'

const TaskList: React.FC = () => {
  const { ui } = useContext(UIContext)
  const { tasks, dispatch } = useContext(TaskContext)

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  )

  if (ui.isLoading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    )
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === TaskStatus.PINNED),
    ...tasks.filter(t => t.state !== TaskStatus.PINNED),
  ]

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task}
        onPinTask={(id) => dispatch(changeStatus(id, TaskStatus.PINNED))} onArchiveTask={(id) => dispatch(changeStatus(id, TaskStatus.ARCHIVED))} />
      ))}
    </div>
  )
}

export default TaskList
