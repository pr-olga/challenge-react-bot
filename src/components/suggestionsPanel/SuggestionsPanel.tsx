import React from 'react'
import { Client as ClientInterface } from '../../store/client/types/Client'
import { Intent as IntentInterface } from '../../store/intents/types/Intent'
import Intent from '../intent/Intent'
import Salutation from '../salutation/Salutation'
import './SuggestionsPanel.scss'

interface ClientProps {
  addIntentToClient: (intent: IntentInterface[]) => void
  client: ClientInterface
  intents: IntentInterface[]
  removeIntentFromClient: (intent: IntentInterface[]) => void
}

// separate Client and combine here props?
const SuggestionsPanel: React.FC<ClientProps> = (props: ClientProps) => {
  const { client, addIntentToClient } = props

  return (
    <section className="panel panel--suggestions">
      <Salutation />
      <article className="panel--suggestions__intents">
        <h2 className="panel--suggestions__intents__title">All Intents</h2>

        {client.intents !== undefined && client.intents.suggestions.length !== 0 ? (
          <button
            className="button button--positive float-r"
            onClick={() => addIntentToClient(client.intents.suggestions)}
          >
            add all
          </button>
        ) : (
          ''
        )}

        {client.intents !== undefined
          ? client.intents.suggestions.map((i) => {
              return <Intent key={i.id} {...i} ClickHandler={() => addIntentToClient([i])}></Intent>
            })
          : ''}
      </article>
    </section>
  )
}

export default SuggestionsPanel
