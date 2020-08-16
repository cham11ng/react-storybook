import React from 'react'

interface Task {
  id: string;
  title: string;
  state: string;
}

interface TaskProps {
  task: Task,
  onPinTask: (value: string) => void,
  onArchiveTask: (value: string) => void;
}

const Task: React.FC<TaskProps> = ({ task: { id, title, state }, onPinTask, onArchiveTask }: any) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} />
      </div>
      <div className="actions">
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  )
}

export default Task
