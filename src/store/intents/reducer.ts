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
      console.log('test')
      return (state = { intents: data })
    default:
      console.log('test2')
      return state
  }
}
