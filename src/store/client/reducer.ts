import { ClientActionTypes, ADD_INTENT_TO_CLIENT, REMOVE_INTENT_FROM_CLIENT, GET_CLIENT } from './types/actions'
import { Client } from './types/Client'
import clients from '../../data/clients.json'

const initialState: Client = {} as Client

const clientReducer = (state = initialState, action: ClientActionTypes): Client => {
  switch (action.type) {
    case ADD_INTENT_TO_CLIENT:
      return {
        ...state,
        intents: {
          // TODO: must be extracted in the utlis
          suggestions: [
            ...state.intents.suggestions.filter(
              (arr1) =>
                action.intents.filter((arr2) => {
                  return arr1.id === arr2.id
                }).length == 0,
            ),
          ], // remove
          choosen: state.intents.choosen.concat(action.intents), // add
        },
      }
    case REMOVE_INTENT_FROM_CLIENT:
      return {
        ...state,
        intents: {
          // TODO: must be extracted in the utlis
          suggestions: state.intents.suggestions.concat(action.intents), // add
          choosen: [
            ...state.intents.choosen.filter(
              (arr1) =>
                action.intents.filter((arr2) => {
                  return arr1.id === arr2.id
                }).length == 0,
            ),
          ], // remove
        },
      }
    case GET_CLIENT:
      // could be replaced dynamically
      state = clients.filter((cl) => cl.id === 1)[0]

      return {
        ...state,
        intents: {
          suggestions: [...state.intents.suggestions.concat(action.intent)],
          choosen: state.intents.choosen, // add
        },
      }
    default:
      return state
  }
}

export { clientReducer }
