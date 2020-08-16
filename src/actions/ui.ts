import UIPayload from '../resources/domain/payload/UIPayload'

export const SET_STATE = 'SET_STATE'

interface ASetState {
  type: typeof SET_STATE,
  payload: UIPayload
}

export const setState = (payload: UIPayload): ASetState => ({
  payload,
  type: SET_STATE,
})

export type UIActions = ASetState
