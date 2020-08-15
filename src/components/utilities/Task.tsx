import React from 'react';

interface TaskProps {
  task: {
    id: string;
    title: string;
    state: string;
  },
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
        <span className="checkbox-custom" onClick={() => onArchiveTask} />
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
  );
}

export default Task;
