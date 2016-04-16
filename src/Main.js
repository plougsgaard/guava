import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'
import _ from 'lodash'
import { compose, withState } from 'recompose'

import { Provider } from 'react-redux'
import configureStore from './store'
import { NODE_ENV } from './config'

import Login from './screens/Login'
import Monkey from './screens/Monkey'

const store = configureStore({})

const routes = {
  monkey: 0,
  banana: 1,
  apples: 2
}

const Main = ({
  route, setRoute // withState
}) => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

export default compose(
  withState('route', 'setRoute', routes.banana)
)(Main)
