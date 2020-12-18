import { AppActions } from '../types/actions'

export const getIntents = (): AppActions => ({
  type: 'GET_INTENTS',
  intents: [],
})
