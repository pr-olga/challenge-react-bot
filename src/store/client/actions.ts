import { Intent } from '../intents/types/Intent'
import { Client } from '../client/types/Client'

import { AppActions } from '../types/actions'

export const addIntentToClient = (intent: Intent[]): AppActions => ({
  type: 'ADD_INTENT_TO_CLIENT',
  intents: intent,
})

export const removeIntentFromClient = (intent: Intent[]): AppActions => ({
  type: 'REMOVE_INTENT_FROM_CLIENT',
  intents: intent,
})

export const getClient = (intent: Intent[]): AppActions => ({
  type: 'GET_CLIENT',
  client: {} as Client,
  intent,
})
