export const SET_STATE = 'SET_STATE'

interface UIPayload {
  isLoading?: boolean
}

interface ASetState {
  type: typeof SET_STATE,
  payload: UIPayload
}

export const setState = (payload: UIPayload): ASetState => ({
  payload,
  type: SET_STATE,
})

export type UIActions = ASetState
