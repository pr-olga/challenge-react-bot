import { Intent } from './types/Intent'
import data from '../../data/intents.json'
import { IntentsActionTypes, GET_INTENTS } from './types/actions'

export interface IntentsState {
  intents: Intent[]
}

const initialState = {
  intents: [],
}

export const intentsReducer = (state: IntentsState = initialState, action: IntentsActionTypes) => {
  switch (action.type) {
    case GET_INTENTS:
      return (state = { intents: data })
    default:
      return state
  }
}
