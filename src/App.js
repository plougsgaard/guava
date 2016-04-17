import React from 'react-native'

import { compose, withState } from 'recompose'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import configureStore from './store'
import { NODE_ENV } from './config'

import AppContainer from './AppContainer'

/**
 * App is the main entry point
 * - configure redux store
 * - wrap AppContainer with store
 */
const store = configureStore({})

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default compose()(App)
