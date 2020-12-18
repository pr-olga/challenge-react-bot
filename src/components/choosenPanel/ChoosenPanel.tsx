import React from 'react'
import { Client as ClientInterface } from '../../store/client/types/Client'
import { Intent as IntentInterface } from '../../store/intents/types/Intent'
import Intent from '../intent/Intent'
import './ChoosenPanel.scss'

interface ClientProps {
  addIntentToClient: (intent: IntentInterface[]) => void
  client: ClientInterface
  intents: IntentInterface[]
  removeIntentFromClient: (intent: IntentInterface[]) => void
}

// separate Client and combine here props?
const ChoosenPanel: React.FC<ClientProps> = (props: ClientProps) => {
  const { client, removeIntentFromClient } = props

  return (
    <section className="panel panel--choosen">
      <h3 className="panel--choosen__title">Your Wokabulary</h3>
      <div className="panel--choosen__content">
        {client.intents !== undefined && client.intents.choosen.length !== 0 ? (
          <button
            className="button button--negative float-r"
            onClick={() => removeIntentFromClient(client.intents.choosen)}
          >
            remove all
          </button>
        ) : (
          ''
        )}

        {client.intents !== undefined
          ? client.intents.choosen.map((i) => {
              return <Intent key={i.id} {...i} ClickHandler={() => removeIntentFromClient([i])}></Intent>
            })
          : ''}
      </div>
    </section>
  )
}

export default ChoosenPanel
