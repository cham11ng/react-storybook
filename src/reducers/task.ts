import { TaskActions, ADD_TASK, CHANGE_STATUS } from '../actions/task'
import TaskStatus from '../resources/enums/TaskStatus'
import TaskState from '../resources/domain/state/TaskState'

export const initialState: TaskState = []

export const reducer = (state: TaskState = initialState, action: TaskActions): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          ...action.payload,
          id: Math.random(), // not really unique but it's just an example
        }
      ]

    case CHANGE_STATUS:
      return state.map((item) => {
        if (item.id === action.meta.id) {
          if (item.state !== TaskStatus.INBOX)
            return { ...item, state: TaskStatus.INBOX }

          return { ...item, state: action.payload }
        }

        return item
      })

    default:
      return state
  }
}
