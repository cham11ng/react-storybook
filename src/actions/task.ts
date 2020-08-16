import TaskStatus from '../resources/enums/TaskStatus'
import ITask from '../resources/domain/entity/ITask'

export const ADD_TASK = 'ADD_TASK'
export const CHANGE_STATUS = 'CHANGE_STATUS'

interface AAddTask {
  type: typeof ADD_TASK,
  payload: ITask
}

interface AChangeStatus {
  type: typeof CHANGE_STATUS,
  payload: TaskStatus,
  meta: { id: number}
}

export const addNewTask = (payload: ITask): AAddTask => ({
  payload,
  type: ADD_TASK,
})

export const changeStatus= (id: number, value: TaskStatus): AChangeStatus => ({
  payload: value,
  type: CHANGE_STATUS,
  meta: { id }
})

export type TaskActions = AAddTask | AChangeStatus
