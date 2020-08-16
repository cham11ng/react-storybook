import React, { createContext, useReducer } from "react"

import { UIActions } from '../actions/ui'
import { reducer, initialState } from "../reducers/ui"
import UIState from '../resources/domain/state/UIState'


export interface IUIContext {
  ui: UIState
  dispatchUI: React.Dispatch<UIActions>
}


export const UIContext = createContext<IUIContext>({
  ui: initialState,
  dispatchUI: () => null
})

export const UIProvider: React.FC = ({ children }) => {
  const [ui, dispatch] = useReducer(reducer, initialState)

  return (
    <UIContext.Provider value={{ ui, dispatchUI: dispatch }}>
      {children}
    </UIContext.Provider>
  )
}
