import React from 'react'

import ITask from '../../resources/domain/entity/ITask'
import TaskStatus from '../../resources/enums/TaskStatus'

interface TaskProps {
  task: ITask,
  onPinTask: (value: number) => void,
  onArchiveTask: (value: number) => void;
}

const Task: React.FC<TaskProps> = ({ task: { id, title, state }, onPinTask, onArchiveTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === TaskStatus.ARCHIVED}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} />
      </div>
      <div className="actions">
        {state !== TaskStatus.ARCHIVED && (
          <span onClick={() => onPinTask(id)}>
            <span className="icon-star" />
          </span>
        )}
      </div>
    </div>
  )
}

export default Task
