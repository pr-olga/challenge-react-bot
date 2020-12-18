import { ClientActionTypes } from '../client/types/actions'
import { IntentsActionTypes } from '../intents/types/actions'

// in case we need manipulate intents data as well
// wen need put this actions in this type union only
export type AppActions = ClientActionTypes | IntentsActionTypes
