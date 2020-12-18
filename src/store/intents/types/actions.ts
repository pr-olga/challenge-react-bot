import { Intent } from './Intent'

export const GET_INTENTS = 'GET_INTENTS'

// catch an error

interface GetIntents {
  type: typeof GET_INTENTS
  intents: Intent[]
}

export type IntentsActionTypes = GetIntents
