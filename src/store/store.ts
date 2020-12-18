import { createStore, combineReducers } from 'redux'
import { clientReducer } from './client/reducer'
import { intentsReducer } from './intents/reducer'
import { AppActions } from './types/actions'

export const rootReducer = combineReducers({
  clientReducer,
  intentsReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore<AppState, AppActions, Record<string, unknown>, Record<string, unknown>>(rootReducer)
