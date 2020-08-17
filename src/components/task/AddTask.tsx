import React, { useState, useContext } from 'react'

import { addNewTask } from '../../actions/task'
import { TaskContext } from '../../contexts/TaskContext'
import TaskStatus from '../../resources/enums/TaskStatus'
import { UIContext } from '../../contexts/UIContext'
import { setState } from '../../actions/ui'

const AddTask: React.FC = () => {
  const { dispatch } = useContext(TaskContext)
  const { dispatchUI } = useContext(UIContext)

  const [task, setTask] = useState<any>()

  const handleTaskData = (e: any) => {
    setTask({
      ...task,
      state: TaskStatus.INBOX,
      [e.target.id]: e.target.value
    })
  }

  const addTask = async (e: any) => {
    e.preventDefault()
    dispatchUI(setState({ isLoading: true }))

    setTimeout(() => {
      dispatch(addNewTask(task))
      dispatchUI(setState({ isLoading: false }))
    }, 2000)
  }

  return (
    <form onSubmit={addTask} className="add-task">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleTaskData}
      />
      <button>Add Task</button>
    </form>
  )
}
export default AddTask
