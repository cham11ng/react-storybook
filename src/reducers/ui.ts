import { UIActions, SET_STATE } from '../actions/ui'
import UIState from '../resources/domain/state/UIState'

export const initialState: UIState = {
  isLoading: false
}

export const reducer = (state: UIState = initialState, action: UIActions): UIState => {
  console.log(action)

  switch (action.type) {
    case SET_STATE:

      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}
