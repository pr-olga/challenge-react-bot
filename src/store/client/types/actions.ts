import { Intent } from '../../intents/types/Intent'
import { Client } from './Client'

// prefer generic singular
export const SET_INIT_CLIENT_STATE = 'SET_INIT_CLIENT_STATE'
export const ADD_INTENT_TO_CLIENT = 'ADD_INTENT_TO_CLIENT'
export const REMOVE_INTENT_FROM_CLIENT = 'REMOVE_INTENT_FROM_CLIENT'
export const GET_CLIENT = 'GET_CLIENT'

// catch an error
interface AddIntentToClient {
  type: typeof ADD_INTENT_TO_CLIENT
  intents: Intent[] // or always an array?
}

interface RemoveIntentFromClient {
  type: typeof REMOVE_INTENT_FROM_CLIENT
  intents: Intent[] // or always an array?
}

interface GetClient {
  type: typeof GET_CLIENT
  client: Client
  intent: Intent[] // or always an array?
}

export type ClientActionTypes = AddIntentToClient | RemoveIntentFromClient | GetClient
