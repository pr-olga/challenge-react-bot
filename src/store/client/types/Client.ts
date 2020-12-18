import { Intent } from '../../intents/types/Intent'

export interface Client {
  id: number
  name: string
  intents: {
    suggestions: Intent[]
    choosen: Intent[]
  }
}
