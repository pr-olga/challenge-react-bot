import React, { useEffect } from 'react'
import { AppState } from '../store/store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { getIntents } from '../store/intents/actions'
import { Intent } from '../store/intents/types/Intent'
import SuggestionsPanel from '../components/suggestionsPanel/SuggestionsPanel'
import ChoosenPanel from '../components/choosenPanel/ChoosenPanel'
import { Client as ClientInterface } from '../store/client/types/Client'
import { getClient, addIntentToClient, removeIntentFromClient } from '../store/client/actions'
import './Home.scss'

interface AppProps {
  getIntents: () => void
  getClient: (intent: Intent[]) => void
  addIntentToClient: (intent: Intent[]) => void
  removeIntentFromClient: (intent: Intent[]) => void
}

interface AppStateProps {
  intents: Intent[]
  client: ClientInterface
}

const mapStateToProps = (state: AppState): AppStateProps => ({
  intents: state.intentsReducer.intents,
  client: state.clientReducer,
})

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  getIntents: () => dispatch(getIntents()),
  getClient: (intents) => dispatch(getClient(intents)),
  addIntentToClient: (intents) => dispatch(addIntentToClient(intents)),
  removeIntentFromClient: (intents) => dispatch(removeIntentFromClient(intents)),
})

type LinkProps = AppProps & AppStateProps

const Home: React.FC<LinkProps> = (props: LinkProps) => {
  const rootProps = props

  // GET INTENTS
  useEffect(() => {
    if (props.intents.length === 0) {
      props.getIntents()
    }
  }, [props])

  // SET CLIENT: INFO + INTENTS
  useEffect(() => {
    if (!props.client.id && props.intents.length !== 0) {
      props.getClient(props.intents)
    }
  }, [props])

  return (
    <main className="main">
      <SuggestionsPanel {...rootProps} />
      <ChoosenPanel {...rootProps} />
    </main>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
