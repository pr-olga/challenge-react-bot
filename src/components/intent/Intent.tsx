import React from 'react'
import './Intent.scss'
import { CommunicationSlot, Intent as IntentInterface } from '../../store/intents/types/Intent'

interface allProps {
  description: IntentInterface['description']
  name: IntentInterface['name']
  trainingData: {
    expressionCount: IntentInterface['trainingData']['expressionCount']
    expressions: {
      id: CommunicationSlot['id']
      text: CommunicationSlot['text']
    }[]
  }
  reply: CommunicationSlot
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Intent: React.FC<allProps> = (allProps) => {
  return (
    <button className="intent" onClick={allProps.ClickHandler}>
      <h4 className="intent__title">{allProps.description}</h4>
      <div className="intent__bubbles">
        <p className="bubble bubble--expression">
          {
            allProps.trainingData.expressions.find((el, index) => {
              return index === 1
            })?.text
          }
        </p>
        <p className="bubble bubble--reaction">{allProps.reply.text}</p>
      </div>
    </button>
  )
}

export default Intent
